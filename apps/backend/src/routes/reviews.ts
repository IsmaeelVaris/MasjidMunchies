import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Add review for a restaurant
router.post('/restaurant', async (req, res) => {
  const { userId, restaurant, rating, comment } = req.body;

  // Create restaurant if it doesn't exist
  const dbRestaurant = await prisma.restaurant.upsert({
    where: { id: restaurant.id },
    update: {},
    create: restaurant,
  });

  const review = await prisma.review.create({
    data: {
      userId,
      restaurantId: dbRestaurant.id,
      rating,
      comment,
    },
  });

  res.json(review);
});

// Add review for a mosque
router.post('/mosque', async (req, res) => {
  const { userId, mosque, rating, comment } = req.body;

  const dbMosque = await prisma.mosque.upsert({
    where: { id: mosque.id },
    update: {},
    create: mosque,
  });

  const review = await prisma.review.create({
    data: {
      userId,
      mosqueId: dbMosque.id,
      rating,
      comment,
    },
  });

  res.json(review);
});

export default router;
