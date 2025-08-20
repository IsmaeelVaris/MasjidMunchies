import { Router } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt'; // <- import JWT helper

const router = Router();
const prisma = new PrismaClient();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, marketing } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashed, marketing },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  // Generate JWT using helper
  const token = generateToken({ userId: user.id });
  res.json({ token, user });
});

export default router;
