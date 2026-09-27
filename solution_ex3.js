const priceSizeS = 35000;
const priceSizeM = 41000; 
const priceSizeL = 45000;
const priceTopping = 8000;

const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let i = 0; i < orderSizes.length; i++) {
  const currentSize = orderSizes[i];
  if (currentSize === "X") {
    continue;
  }
  if (currentSize === "S") {
    totalDrinkAmount += priceSizeS;
  } else if (currentSize === "M") {
    totalDrinkAmount += priceSizeM;
  } else if (currentSize === "L") {
    totalDrinkAmount += priceSizeL;
  }
}

let finalBillAmount = (totalDrinkAmount + toppingCount * priceTopping) * (isGoldMember ? 0.9 : 1.0);
console.log("Tổng tiền hóa đơn:", finalBillAmount, "VNĐ");



//    Trường hợp kiểm thử  Dữ liệu đầu vào  Kết quả sai thực tế  Kết quả đúng mong đợi 
//   |----------------------|------------------------------|--------------------------------------|---------------------------------------|
//   | Case 1: Hủy ở giữa   | "MLXSM" (Topping:2, Gold: Có)| M+L (41k+45k) = 91,800 VNĐ           | M+L+S+M = 160,200 VNĐ                 |
//   | Case 2: Hủy ở đầu    | "XML" (Topping:0, Gold: K)   | 0 VNĐ (Ngắt ngay lập tức)            | M+L = 86,000 VNĐ                      |
