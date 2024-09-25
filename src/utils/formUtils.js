export const getModifiedFields = (initialValues, currentValues) => {
  const modifiedFields = {};
  for (const key in currentValues) {
    if (currentValues[key] !== initialValues[key]) {
      modifiedFields[key] = currentValues[key];
    }
  }
  return modifiedFields;
};
