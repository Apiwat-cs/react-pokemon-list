# react-pokemon-list

Pokemon List เป็นเว็บไซต์ที่แสดงรายการโปเกม่อนทั้งหมดจาก API พร้อมฟีเจอร์ที่ให้ผู้ใช้สามารถเรียกดูรายละเอียดสถิติของโปเกม่อน และเลื่อนดูรายการโปเกม่อนในรูปแบบที่เข้าใจง่าย

## ลิ้งค์ตัวอย่าง
https://cool-otter-94bfb6.netlify.app/

---

## คุณสมบัติหลัก
- แสดงโปเกม่อนแบบเด่น 1 ตัว (Featured Pokemon) พร้อมข้อมูลเชิงลึก เช่น:
  - **Stats**: hp, attack, defense, speed เป็นต้น
  - **Abilities**: ความสามารถเฉพาะของแต่ละตัว
- แสดงรายการโปเกม่อนทั้งหมดแบบกริด
- รองรับการโหลดข้อมูลเพิ่มเติม (Load More) โดยใช้ **Pagination**
- ใช้ API จาก **PokeAPI** ในการดึงข้อมูล

---

## เทคโนโลยีที่ใช้
- **React.js**: สำหรับการพัฒนา Frontend
- **React Router**: สำหรับการจัดการเส้นทางของหน้าเว็บไซต์
- **Axios**: สำหรับการเรียกข้อมูลจาก API
- **Vite**: สำหรับการ build และพัฒนาโปรเจค
- **CSS**: สำหรับการตกแต่งเว็บไซต์

---

## วิธีการติดตั้งและรันโปรเจค

1. Clone โปรเจค:
```bash   
  git clone <repository-url>
  cd Pokemon-List
   
2. ติดตั้ง Dependencies:
```bash
  npm install

3. รันโปรเจคในโหมดพัฒนา:
```bash
  npm run dev

4. Build สำหรับ Production:
```bash
  npm run build

  ไฟล์ที่ได้จะอยู่ในโฟลเดอร์ dist
