import Review from '../models/review.js';
import Fruit from '../models/Fruit.js';

export const createReview = async (req, res) => {
  const fruitId = req.params.fruitId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    //
    await Fruit.findByIdAndUpdate(fruitId, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({
      success: true,
      message: 'Review submitted',
      data: savedReview,
    });
  } catch (err) {
    console.err(err);
    res.status(404).json({
      success: false,
      message: 'failed to submit',
    });
  }
};
