# "This" keyword
- giới thiệu về đối tượng
- phương thức
- thuộc tính
- từ khóa this trong js đề cập đến object hiện tại (đối tượng mà nó thuộc về)
- cách nhận biết đối tượng mà this trỏ đến
- ví dụ iphone (code)
- Hàm tạo (this nằm trong phương thức -> trỏ về đối tượng được tạo ra)
- ví dụ với html dom 
## Đặc tính
- Trong một phương thức, từ khóa this tham chiếu đến đối tượng chứa phương thức đó (đối tượng trước dấu chấm).
- Đối với một hàm, từ khóa this tham chiếu đến đối tượng toàn cục.
```js
console.log(this); // window

function checkThis() {
    console.log(this); // window
}
checkThis();

//but

'use strict';
console.log(this); // undefined

window.checkThis = function() {
    console.log(this); // window
}
```
- Hàm tạo

## Lưu ý
- Trong strict mode, giá trị của this là undefined trong hàm nếu nó được gọi như một hàm, không phải là một phương thức.
- this trong hàm tạo đại diện cho đối tượng được tạo ra bởi hàm tạo đó.
- Các phương thức bind(), call() và apply() cho phép tham chiếu đến this ở trong đối tượng khác.

## end
- Không nhất thiết phải tạo  các thuộc tính và phương thức ngay trong hàm tạo
mà có thể tạo thông qua prototype -> next

## Prototype 
- quay lại ví dụ trước
-> Object constructor là thiết kế tạo nên ngôi nhà thì object prototype là nguyên liệu
- Khác biệt giữa this và prototype
- ví dụ hàm tạo person
- ví dụ hàm tạo person có phương thức sayHello
- thêm thuộc tính bằng prototype
- thêm phương thức bằng prototype
### Getters and setters
- Getter và setter là gì?
- Cách khai báo getter và setter
- ví dụ
- 
## Array prototype
