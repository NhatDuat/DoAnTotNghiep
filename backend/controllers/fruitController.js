import Fruit from '../models/Fruit.js';

//create new fruit
export const createFruit = async (req, res) => {
  const newFruit = new Fruit(req.body);

  try {
    const saveFruit = await newFruit.save();

    res.status(200).json({
      success: true,
      message: 'Successfully created',
      data: saveFruit,
    });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, message: 'Failed to created.Try again ' });
  }
};
//update fruit
export const updateFruit = async (req, res) => {
  const id = req.params.id;
  try {
    const updateFruit = await Fruit.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updateFruit,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'failed to update',
    });
  }
};
//delete fruit
export const deleteFruit = async (req, res) => {
  const id = req.params.id;
  try {
    await Fruit.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'failed to delete',
    });
  }
};
//getSingle fruit *
export const getSingleFruit = async (req, res) => {
  const id = req.params.id;

  try {
    const fruit = await Fruit.findById(id).populate('reviews');

    res.status(200).json({
      success: true,
      message: 'Successfully ',
      data: fruit,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'not found',
    });
  }
};

//getAll fruit
export const getAllFruit = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);
  // console.log(page);

  try {
    const fruits = await Fruit.find({})
      .populate('reviews')
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: fruits.length,
      message: 'Successful',
      data: fruits,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'not found',
    });
  }
};

// get fruit by search
export const getFruitBySearch = async (req, res) => {
  // ở đây 'i' phân biệt chữ hoa chữ thường
  const { title } = req.query;

  try {
    const filter = title
      ? {
          title: {
            $regex: title,
            $options: 'i',
          },
        }
      : {};
    const result = await Fruit.find(filter).populate('reviews');

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'not found',
    });
  }
};

//get featured fruit
export const getFeaturedFruit = async (req, res) => {
  try {
    const fruits = await Fruit.find({ featured: true })
      .populate('reviews')
      .limit(8);

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: fruits,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'not found',
    });
  }
};

// get fruit counts
export const getFruitCount = async (req, res) => {
  try {
    const fruitCount = await Fruit.estimatedDocumentCount();

    res.status(200).json({ success: true, data: fruitCount });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'faild to fetch',
    });
  }
};
