# Sử dụng image Node.js làm base
FROM node:21.6.1

# Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép file package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép tất cả mã nguồn của ứng dụng vào container
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "index.js"]
