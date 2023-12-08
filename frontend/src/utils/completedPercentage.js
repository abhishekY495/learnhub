export const completedPercentage = (syllabus) => {
  const allTopics = syllabus?.reduce((acc, curr) => {
    return [...acc, ...curr?.topics];
  }, []);

  const doneTopics = allTopics.reduce((acc, curr) => {
    return curr?.markAsDone ? acc + 1 : acc;
  }, 0);

  const completedPercentage = ((doneTopics / allTopics.length) * 100).toFixed(
    0
  );

  return completedPercentage;
};
