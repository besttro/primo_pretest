import { ArrayMerger } from '../src/merge';

describe('ArrayMerger Tests', () => {
  let merger: ArrayMerger;

  beforeEach(() => {
    merger = new ArrayMerger();
  });

  test('สามารถ merge array ทั้ง 3 ชุดได้อย่างถูกต้อง', () => {
    const col1 = [1, 5, 9];
    const col2 = [2, 6, 8];
    const col3 = [10, 7, 3];

    const result = merger.merge(col1, col2, col3);
    
    expect(result).toEqual([1, 2, 3, 5, 6, 7, 8, 9, 10]);
  });

  test('สามารถจัดการกับ array ว่างได้', () => {
    const result = merger.merge([], [1, 2], [5, 4]);
    expect(result).toEqual([1, 2, 4, 5]);
  });

  test('สามารถจัดการกรณีมีเลขติดลบและค่าซ้ำกันได้', () => {
    const col1 = [-5, 0, 5];
    const col2 = [-10, 5, 10];
    const col3 = [4, 0, -1]; 

    const result = merger.merge(col1, col2, col3);
    
    expect(result).toEqual([-10, -5, -1, 0, 0, 4, 5, 5, 10]);
  });
});