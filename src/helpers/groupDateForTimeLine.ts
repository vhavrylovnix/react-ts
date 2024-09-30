import { PatientBillingData } from '@/interfaces/patients';

export const groupByDate = (data: PatientBillingData[]) => {
  const grouped = data.reduce((acc: any, curr) => {
    const date = curr.dos_from;
    if (!acc[date]) {
      acc[date] = [];
    }

    if (curr.code) {
      acc[date].push(curr);
    }
    return acc;
  }, {});

  const sortedGrouped = Object.entries(grouped).sort(([dateA], [dateB]) => {
    const parsedDateA = new Date(dateA.split('/').reverse().join('-'));
    const parsedDateB = new Date(dateB.split('/').reverse().join('-'));
    return parsedDateA.getTime() - parsedDateB.getTime();
  });

  // Convert sorted entries back to an object
  return Object.fromEntries(sortedGrouped);
};
