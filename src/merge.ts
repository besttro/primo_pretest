export interface IMerge {
  merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[];
}

export class ArrayMerger implements IMerge {
  public merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    
    let i = 0; // ตำแหน่งของ collection_1 (เรียงจากน้อยไปมาก)
    let j = 0; // ตำแหน่งของ collection_2 (เรียงจากน้อยไปมาก)
    let k = collection_3.length - 1; // ตำแหน่งของ collection_3 (เรียงจากมากไปน้อย เริ่มที่ตัวสุดท้าย)

    while (i < collection_1.length || j < collection_2.length || k >= 0) {
      
      // ดึงค่าออกมาเช็ค
      const item1 = collection_1[i];
      const val1 = item1 !== undefined ? item1 : Infinity;

      const item2 = collection_2[j];
      const val2 = item2 !== undefined ? item2 : Infinity;

      const item3 = collection_3[k];
      const val3 = item3 !== undefined ? item3 : Infinity;

      // เปรียบเทียบค่าที่น้อยที่สุดแล้ว push เข้า result
      if (val1 <= val2 && val1 <= val3) {
        result.push(val1);
        i++;
      } else if (val2 <= val1 && val2 <= val3) {
        result.push(val2);
        j++;
      } else {
        result.push(val3);
        k--;
      }
    }

    return result;
  }
}