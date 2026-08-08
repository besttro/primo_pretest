# Array Merger Project

โปรเจกต์นี้เป็นการเขียนฟังก์ชันด้วยภาษา TypeScript เพื่อรวม (Merge) อาร์เรย์ 3 ชุดเข้าด้วยกันให้เรียงจากน้อยไปมาก (Ascending) โดยไม่มีการใช้ฟังก์ชัน `sort()` ที่ติดมากับภาษา

## 📂 รายละเอียดไฟล์ในโปรเจกต์
- **`src/merge.ts`** : ไฟล์หลักที่เก็บโค้ดการทำงาน (Logic) ประกอบด้วย Interface และ Class ที่ใช้อัลกอริทึม Three-Pointer ในการเปรียบเทียบค่า
- **`tests/merge.test.ts`** : ไฟล์สำหรับรัน Unit Test ด้วยเฟรมเวิร์ก Jest เพื่อทดสอบความถูกต้องของฟังก์ชันในเคสต่างๆ (เคสปกติ, อาเรย์ว่าง, ค่าติดลบ, ฯลฯ)
---

## 🚀 วิธีการโคลน, ตั้งค่า Dependency และรัน Unit Test

### 1. โคลนโปรเจกต์ (Clone Repository)
เปิด Terminal และรันคำสั่งเพื่อดาวน์โหลดโค้ดลงเครื่อง จากนั้นย้ายเข้าไปในโฟลเดอร์โปรเจกต์:
```bash
git clone <URL_ของ_Repository>
cd primo_pretest

```

### 2. ติดตั้ง dependency
```bash
npm install
```

### 3. รัน unit test
```bash
npm run test
```
