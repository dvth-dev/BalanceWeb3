# Kế Hoạch Phát Triển Ứng Dụng Web3

## 1. Xây dựng UI

- [ ] Tạo AppBar/Header
- [ ] Nút Connect Wallet
- [ ] Balance section (hiển thị số dư)
- [ ] Transaction History section
- [ ] Tối ưu responsive + dark theme

---

## 2. Kết nối ví

- [ ] Tích hợp MetaMask
- [ ] Tạo nút Connect Wallet
- [ ] Lấy địa chỉ ví
- [ ] Hiển thị địa chỉ rút gọn
- [ ] Xử lý đổi mạng / đổi ví

---

## 3. Hiển thị Số Dư

- [ ] Lấy balance bằng provider
- [ ] Chuyển đổi từ Wei → ETH
- [ ] Render lên UI
- [ ] Thêm loading + error state

---

## 4. Lịch sử giao dịch

- [ ] UI bảng lịch sử giao dịch
- [ ] Thêm dữ liệu giả để test
- [ ] Gọi API Etherscan / Alchemy để lấy lịch sử thật
- [ ] Hiển thị hash rút gọn, ngày giờ, số tiền, trạng thái

---

## 5. Tối ưu hoá & Tách Code

- [ ] Tạo custom hooks: `useWallet()`, `useBalance()`, `useTransactions()`
- [ ] Tách component nhỏ: `WalletInfo`, `TxRow`…
- [ ] Clean code + xử lý lỗi thống nhất

---

## 6. Tích hợp Smart Contract (tuỳ chọn)

- [ ] Tạo smart contract đơn giản (Counter/Store)
- [ ] Deploy bằng Remix
- [ ] Lấy ABI + address
- [ ] Gọi hàm read + write từ UI
- [ ] Thêm loading khi gửi giao dịch
