const validateRequiredFields = (requiredFields) => {
  return (req, res, next) => {
    const missingFields = requiredFields.filter(field => {
      const value = req.body?.[field] ?? req.query?.[field];
      return !value || value.toString().trim() === '';
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    next();
  };
};


export default validateRequiredFields;
