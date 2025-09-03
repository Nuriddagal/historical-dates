import { useEffect, useState } from 'react';

export type DateRangeArr = {
  id: number;
  dateStart: number;
  dateEnd: number;
  name: string;
};
export type DateEventsArr = {
  id: number;
  name: string;
  description: string;
  year: number;
};
function isError(e: unknown): e is Error {
  return e instanceof Error;
}
export function useDateData() {
  const [rangeArr, setRangeArr] = useState<DateRangeArr[]>([]);
  const [dateArr, setDateArr] = useState<DateEventsArr[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [currentStart, setCurrentStart] = useState<number>(0);
  const [currentEnd, setCurrentEnd] = useState<number>(0);
  const [currentRange, setCurrentRange] = useState<string>('');

  useEffect(() => {
    const fetchAll = async () => {
      const [rangeData, eventData] = await Promise.all([
        fetch(
          'https://68b199a2a860fe41fd5efb5e.mockapi.io/api/hisdate/dateRange'
        ).then((r) => r.json()),
        fetch(
          'https://68b199a2a860fe41fd5efb5e.mockapi.io/api/hisdate/historicalEvents'
        )
          .then((r) => r.json())
          .finally(() => setLoading(false)),
      ]);
      setRangeArr(rangeData);
      setDateArr(eventData);
      setCurrentStart(rangeData[0]?.dateStart || 0);
      setCurrentEnd(rangeData[0]?.dateEnd || 0);
      setCurrentRange(rangeData[0]?.name || '');
    };
    fetchAll();
  }, []);

  return {
    rangeArr,
    dateArr,
    loading,
    error,
    currentEnd,
    currentRange,
    currentStart,
    setCurrentEnd,
    setCurrentRange,
    setCurrentStart,
  };
}
