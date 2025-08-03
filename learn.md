# What I learned
## CSS ที่ต้องรู้
## 1. css seletor เราจะแต่งอะไรให้ select เข้าไป

 วิธี select มี 3 แบบ

 ### เข้าถึง tag(DOM)
        **ตัวอย่าง** เข้าถึง tag ```body```
    ```css
     body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 20px;
        }
    ```
### เข้าถึง id
        **ตัวอย่าง** เข้าถึง ```#item```
        ```css
        #item{
            background: #eee;
        }
        ```
###  เข้าถึง class 
        **ตัวอย่าง** เข้าถึง ```.container```
        ```css
            .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        ```
## 2. CSS selector มี 5 แบบ (1-2 ใช้บ่อย)

### 1. แม่-ลูก (เว้นวรรค)
```html
<div class="container">
        Container
        <div class="item">
            Item
        </div>
    </div>
```

```css
.container .item{ /*เข้าถึงตัวลูก*/
            background-color: aqua;
        }
```
### 2. base class(ไม่เว้นวรรค)
```html
    <button class="button">button</button>
    <button class="button active">button</button>
```

```css
.button{ /*ิbase class*/
            border: 0;
            background-color: gray;
            padding: 10px;
        }
        .button.active{
            background-color: blue;
        }
```

### 3.แม่-ลูก-หลาน ต้องการแต่งแค่ลูก (>)
```html
    <div class="main-container">
        Container
        <div class="item">
            Item
            <div class="item">
                Item 1
            </div>
            <div class="item">
                Item 2
            </div>
            <div class="item">
                Item 3
            </div>
        </div>
    </div>
```

```css
.main-container > .item{
            background-color: bisque;
            padding: 10px;
        }
```

### 4. เพื่อนกัน (adjacent)
```html
    <!--<div class="item2">Item 2</div>-->
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
```

```css
.item1 + .item2{
            /*เป็นเงื่อไขว่า .item2 ต้องติดอยู่หลัง item1 เท่านั้นถึงจะทำงาน*/
            background-color: aquamarine;
        }
```

### 5. attribte selrctor แต่งตัวที่ att เหมือนกัน
```html
    <input  type="text" name="firstname">
    <input  type="text" name="lastname">
    <input  type="text" name="description">
```

```css
/*ชื่อtag[att ไม่ต้องใส่ ""]*/
input[type=text]{
            border: 1px gray solid;
            height: 100px;
        }
```

## 2. CSS pseudo selector มี 2 แบบ
### 1. pseudo class / pseudo selector (:)
* pseudo class 

    **ตัวที่ใช้บ่อย** เช่น ```:hover```, ```:active``` = กด, ```:focus``` = cursor กดอยู่

    ```html
    <input type="text">
    <button class="button">button</button>
    ```

    ```css
    .button{
            background-color: gray;
            border: 0;
            padding: 20px;
        }

        .button:hover{/*กด*/
            background-color: blue;
        }

        .button:active{/*กด*/
            background-color: orange;
        }

        .button:focus{/*cursor กดอยู่*/
            background-color: red;
        }

        input:focus{
             background-color: orange;
        }
    ```


* pseudo selector

    เราสามารถใช้ class เดียวกันเพื่อเป็นอันหนึ่งอันเดียวกัน แต่ก็สามารถแต่งแยกกันได้
```html
<div class="container">
    <div class="item">1</div> <!--:first-child-->
    <div class="item">2</div> <!--:nth-child(2)-->
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div> <!--:last-child-->
</div>
```

```css
.container .item:first-child{
            background-color: blue;
        }
        .container .item:nth-child(2){
            background-color: brown;
        }
        .container .item:last-child{
            background-color: orange;
        }
```

**result**

![alt text](./img/pseudo_selector.png)


### 2. pseudo element (::)

pseudo element คือมันจะถูกมองว่ามีอะไรมาครอบทำให้แต่ง style ได้

![alt text](./img/pseudo_element%20.png)

**ตัวที่ใช้บ่อย** เช่น ```::before``` , ```::after``` , ```::first-letter```

```html
<div class="mike smile">TestMike</div>
```

```css
        .mike{
            color: blue;
        }

        .mike::first-letter{
            font-size: 40px;
        }

        .mike::before{
            content: '?';
        }
        
        .smile::after {
            content: '😆';
        }
```
## 3. ```<div>``` vs ```<span>```
* ```<div>``` จะขึ้นบรรทัดใหม่ นิยมใช้เป็นเหมือนกล่องไว้ครบเพื่อแต่ง style
* ```<span>``` จะไม่ขึ้นบรรทัดใหม่ ส่วนตัวเอาไว้ใช้คู่กับ ```<p>``` การณีอยากแต่งแค่บางส่วนของประโยค
    **ตัวอย่าง**
    ```html
    <p>Copyright &copy;2025 Designed by
        <span><a href="#header">Mister S</a></span>
    </p>
    ```
## 4. ```margin``` vs ```padding```
![alt text](img/margin-padding.jpg)

จะเห็นว่าทั้ง ```margin``` และ ```padding``` เอาไว้ใช้เพิ่ม space ให้กล่อง
* margin -> space นอกกล่อง ใช้เลื่อนทั้งกล่อง จะกำหนดแยกหรือรวมในบรรทัดเดียวก็ได้

```css
/*     บนทล่าง  ซ้ายขวา*/
margin: 10px   5px;
```
* padding -> space ในกล่อง สามารถกำหนดได้เหมือน margin

## 5. position
* static -> เป็น defualt
* relative -> ผลักออก
* absolute -> กำหนดตำแหน่งทั้งหน้าจอ
* fixed -> ตำแหน่งจะไม่เปลี่นแม้ scroll
* sticky -> เหมือน fixed แต่จะตาม scroll เฉพาะใน container ของมัน

## 6. เปรียบเทียบขนาด font

| HTML Tag | ขนาด (em/rem) | ขนาด (px) โดยประมาณ |
| -------- | ------------- | ------------------- |
| `<h1>`   | 2.0rem        | 32px                |
| `<h2>`   | 1.5rem        | 24px                |
| `<h3>`   | 1.17rem       | \~18.72px           |
| `<h4>`   | 1.0rem        | 16px                |
| `<h5>`   | 0.83rem       | \~13.28px           |
| `<h6>`   | 0.67rem       | \~10.72px           |

## 7. หน่วยในในโลก CSS
    * % -> % ของกล่อง(parent)
    * vw(width), vh(height) -> ขนาดเป็นไปตามหน้าจอ
    * em -> ขาดเป็น x เท่าของแม่(สมมุติแม่ = 12px) เช่น 2em = 12*2 = 24px
    * rem -> ขาดเป็น x เท่าของ root(default = 16px) เช่น 3rem = 16*3 = 48px

`
## 8. คำสัง css ที่ใช้ในการจัดของ
เกมฝึกความเข้าใจ [flexboxfroggy](https://flexboxfroggy.com/#th)

| คำสั่ง CSS               | ใช้กับอะไร      | ทำหน้าที่อะไร                                                |
| ------------------------ | --------------- | ------------------------------------------------------------ |
| `display: flex;`         | container (แม่) | กำหนดให้ใช้ flexbox กับลูกภายใน                              |
| `justify-content`        | container (แม่) | จัดตำแหน่ง **แนวนอน** ของลูก (ตามแกนหลัก)                    |
| └ `flex-start`           |                 | ชิดซ้าย                                                      |
| └ `center`               |                 | อยู่กลางแนวนอน                                               |
| └ `flex-end`             |                 | ชิดขวา                                                       |
| └ `space-between`        |                 | กระจายเต็มพื้นที่ มีช่องว่างระหว่าง แต่ไม่มีตรงขอบ           |
| └ `space-around`         |                 | กระจาย มีช่องว่างรอบ ๆ ทุกด้าน                               |
| └ `space-evenly`         |                 | ช่องว่างระหว่างเท่ากันทุกส่วน                                |
| `align-items`            | container (แม่) | จัดตำแหน่ง **แนวตั้ง** ของลูก (ตามแกนขวาง)                   |
| └ `flex-start`           |                 | ชิดบน                                                        |
| └ `center`               |                 | อยู่กลางแนวตั้ง                                              |
| └ `flex-end`             |                 | ชิดล่าง                                                      |
| └ `stretch` (default)    |                 | ยืดความสูงเท่ากันกับ container                               |
| `align-self`             | ลูก (เฉพาะตัว)  | จัดตำแหน่งแนวตั้งเฉพาะตัว (override `align-items`)           |
| `justify-self` (ใน grid) | ลูก (เฉพาะตัว)  | จัดแนวนอนของตัวเองใน Grid                                    |
| `align-content`          | container (แม่) | จัดหลายแถวใน flex/grid ถ้ามีหลายบรรทัด (ใช้ร่วมกับ wrap ได้) |

## 9.css layout
| เทคนิค Layout    | คำสั่งหลัก                                         | ใช้ทำอะไร                                | จุดเด่น                              | ข้อควรระวัง                             |
| ---------------- | -------------------------------------------------- | ---------------------------------------- | ------------------------------------ | --------------------------------------- |
| **Flexbox**      | `display: flex;`                                   | จัดเรียงแนวแถว/แนวคอลัมน์                | ง่าย, ยืดหยุ่น, เหมาะกับแนวเดียว     | ไม่เหมาะกับเลย์เอาต์หลายแถว/ซับซ้อน     |
| **Grid**         | `display: grid;`                                   | จัดวางแบบตาราง (row/column)              | เหมาะกับเลย์เอาต์ซับซ้อน, หลายบรรทัด | คำสั่งเยอะกว่า flexbox                  |
| **Float**        | `float: left/right;`                               | ลอยซ้าย/ขวา ใช้จัดเลย์เอาต์แบบเก่า       | ใช้ได้ทุกเบราว์เซอร์                 | มีปัญหากับการจัดการความสูงของ container |
| **Position**     | `position: static/relative/absolute/fixed/sticky;` | จัดตำแหน่งแบบอิสระ                       | ควบคุมตำแหน่งได้แม่นยำ               | ซ้อนทับกันง่าย, ต้องคำนวณเอง            |
| **Inline-Block** | `display: inline-block;`                           | เรียงในแนวนอนเหมือน inline แต่จัดขนาดได้ | ใช้ง่าย, ไม่ใช้ float                | ช่องว่าง (white space) ระหว่างบล็อก     |
| **Multi-Column** | `column-count`, `column-gap`                       | แบ่งคอลัมน์อัตโนมัติในเนื้อหา            | เหมาะกับบทความ/ข้อความยาว            | ควบคุมขนาดและเนื้อหายากกว่าตาราง        |

## css เพิ่มเติม
1. import font จาก [google font](https://fonts.google.com/)

![alt text](./img/font.png)
``` css 
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); /*ก้อปมาวาง*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins'; /*ชื่อ font ที่ import มา*/
}
```
2. set up
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /*กำหนดให้กล่องเป็นขนาดจริง ไม่รวม margin padding*/
    font-family: 'Poppins';
}

a {
    text-decoration: none; /*a ไม่มีเส้นใต้*/
}
ul {
    list-style: none; /*li ไม่มีตุ่ม*/
}

```
------------------------------
3. css ไล่สี
```css
background: linear-gradient(135deg, #ff9a9e, #fecfef);
```
------------------------------

4. ใส่ vdo  ดูที่ไฟล์ ```clude-iframe```


## .container vs กำหนดที่ ```<body>```
* เป็นกสรกำหนดกล่องใช้เอง จะได้ไม่ต้องใช้ .container ของ boostrap
```css
section {
    width: 80%;
    margin: 80px auto;
}
```
หรือ

```css
.container{
    width: 80%;
    margin: 80px auto;
}
```

* ส่วนตัวคิดว่าแบบนี้ไม่เปลือง class ดี
```css
 body {
    max-width: 800px; /*กำหนดให้ content อยู่กลาง*/
    margin: 0 auto;
}
```

## เอาเม้าไปจ่อแล้วขึ้นคำ ด้วย ```title=```
* ใช้ได้กับทั้ง ```<img>``` และ ```<a>```
```html
    <a href="https://www.google.com/" 
                onclick="alert('คลิกแล้ว! ปกติจะไปที่ pixel google');" 
                target="_blank"
                title="กด"  
    >click
    </a>
```
**result**

![alt text](./img/click.png)

## .highlight vs .btn
ไอเดียการใช้ปุ่มขอบโค้ง
* ```.highlight ``` ใช้กับ ```<span></span>```
* ```.btn``` ใช้กับ ```<a></a>```
```css
.highlight , .btn{
    background-color: #3573b7;
    border-radius: 20px;
    
    padding: 4px 8px; /* เพิ่มช่องว่างเล็กน้อยรอบข้อความ */
    align-items: center;
}

```
```html
    <span class="highlight">hello</span>
    <span class="highlight">hello apin</span>

    <a href="#" class="btn">button</a>
```
**result**

![alt text](./img/btn.png)



## ใส่รูปพื้นหลังบางส่วน

```html
  <section class="section-1">
    <div class="explore-content">
      <h1>EXPLORE THE WORLD</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos nisi quas similique, quod dicta
        veritatis commodi sapiente temporibus laboriosam odit itaque iure corrupti praesentium.</p>
      <a href="#" class="btn">Show more </a>
    </div>
  </section>
```

```css
.section-1 {
    width: 100%;  /*กว้างเต็มจอ*/
    height: 100vh; /*ยาวเต็มจอ ณ จังหวะเปิด*/

    background-image: url(img/bg.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    margin-top: 0px;
}
```

## .row and .col
* เราสามารถเขียน ```.row , .col``` ไว้ใช้จัดหน้าได้ สะดวกดี
```css
.row {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    
}
.row .col {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```



## ทำรูปดึ้บๆ
```css
/*Animations*/
img {
    transition: tranform .3s ease;
}
img:hover {
    transform: scale(1.1);
    cursor: pointer;
}
```

## .line vs ```<hr>```
* ให้ผลลัพพ์เหมือนกัน ส่วนตัวคิดว่า ```<hr>``` สะดวกกว่า
```css
.line , hr {
    width: 150px;
    height: 4px;
    background: #fc036b;
    margin: 10px auto;
    border-radius: 5px;
    border: none;
}
```
```html
    <hr>
    <div class="line"></div>
```
**result**

![alt text](./img/line.png)

## จัดรูป แบบ pinteres ด้วย css
ref code: [youtube](https://youtu.be/iweHJ7Gqjxs?si=I95vDPVxQlXVtcBG)
```html
<section id="columns">
    <figure>
        <a href="https://pixabay.com/th/" target="_blank">
            <img src="https://cdn.pixabay.com/photo/2025/06/19/16/adventure-9669330_1280.jpg" />
        </a>

        <figcaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Dignissimos animi natus reprehenderit asperiores veritatis voluptas 
            sint inventore mollitia quos impedit!
        </figcaption>
    </figure>
</section>
```

```css
#columns {
    column-width: 320px;
    column-gap: 15px;
    width: 90%;
    max-width: 1100px;
    margin: 50px auto;
}
       
#columns figure {
    background: #efefef;
    border: 2px solid #fcfcfc;
    box-shadow: 0 1px 2px rgba(35, 25, 25, .4);
    margin: 0 2px 15px;
    padding: 15px;
    padding-bottom: 10px;
    transition: .4s ease-in-out;
    display: inline-block;
    /*column-break-inside: avoid; ไม่ใส่ก็ได้*/
}

#columns figure img {
    width: 100%;
     height: auto;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    margin-bottom: 5px;
}

#columns:hover figure:not(:hover) {
    opacity: 0.4;
}
```

## card

![alt text](./img/card.png)

```html
      <div id="card-area"> 
        <div class="box-area">
            <div class="box">
                <img src="https://cdn.pixabay.com/photo/2023/01/08/09/36/mountain-7704817_1280.jpg" alt="Kayaking">
                <div class="overlay">
                    <h3>Kayaking</h3>
                    <p>Paddle through crystal clear waters and discover hidden coves and wildlife.</p>
                    <a href="#">Book now</a>
                </div>
            </div>

            <div class="box">
                <img src="https://cdn.pixabay.com/photo/2022/10/07/11/02/autumn-7504820_1280.jpg" alt="Rock Climbing">
                <div class="overlay">
                    <h3>Rock Climbing</h3>
                    <p>Challenge yourself with our rock climbing adventures suitable for all skill levels.</p>
                    <a href="#">Book now</a>
                </div>
            </div>

            <div class="box">
                <img src="https://cdn.pixabay.com/photo/2025/05/21/15/08/classic-cars-9614046_1280.jpg" alt="Cycling">
                <div class="overlay">
                    <h3>Mountain Biking</h3>
                    <p>Ride through scenic mountain trails with our high-quality bikes and safety equipment.</p>
                    <a href="#">Book now</a>
                </div>
            </div>

        </div>
    </div>
```
```css
        /*--------------*/
         #card-area { /*กำหนดไว้เหมือน container*/
            max-width: 1200px;
            margin: 0 auto;
        }

        .box-area {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /*กำหนดขนาด card*/
            grid-gap: 40px;
            margin-top: 50px;
        }
        
        .box {
            position: relative;
            height: 300px; /*กำหนดขนาดรูป*/
            border-radius: 10px;
            overflow: hidden; /*ทำให้มองไม่ของที่อยู่ใน div ย่อย*/
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
        }

        /*กรณีใช้ flex
       .box-area {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            margin-top: 50px;
        }
        
        .box {
            position: relative;
            height: 300px;  /*กำหนดขนาดรูป
            border-radius: 10px;
            overflow: hidden; /*ทำให้มองไม่ของที่อยู่ใน div ย่อย
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;

            flex: 1 1 250px;
            min-width: 250px;
        }
        /*-------------*/
        .box:hover {
            transform: translateY(-5px);
        }

        .box img {
            width: 100%;  /*ตีเต็ม 100% ของ 300px ที่กำหนดไว้ใน .box*/
            height: 100%;
            object-fit: cover;
        }

        .overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            color: white;
            padding: 20px;
            transform: translateY(100%);  /*พลักให้อยู่ล่างกล่อง*/
            transition: transform 0.3s ease;
        }

        .box:hover .overlay {
            transform: translateY(0);  /*popup ขึ้นมา*/
        }

        .overlay h3 {
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .overlay p {
            margin-bottom: 15px;
            line-height: 1.4;
        }

        .overlay a {
            display: inline-block;
            background-color: #007bff;
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 15px;
            transition: background-color 0.3s ease;
        }

        .overlay a:hover {
            background-color: #0056b3;
        }
        /*--------------*/
```

## slide img
ref code: [youtube](https://youtu.be/McPdzhLRzCg?si=XgigkiKUb4Yeb-wx)

![alt text](./img/slide.png)

| อัตราส่วน | ใช้กับอะไรบ่อย                    |
| --------- | --------------------------------- |
| `16 / 9`  | วิดีโอ YouTube, หน้าจอทีวี        |
| `4 / 3`   | จอเก่า, รูปถ่ายบางประเภท          |
| `1 / 1`   | กรอบรูปสี่เหลี่ยมจัตุรัส, โปรไฟล์ |
| `3 / 4`   | รูปแนวตั้ง                        |
| `21 / 9`  | จอกว้างพิเศษ (Ultra-Wide)         |

```html
    <!----------->
    <section class="container">
        <div class="slider-wrapper">
            <div class="slider">
                <img id="slide-1" src="https://cdn.pixabay.com/photo/2025/06/16/14/06/ring-necked-parakeet-9663360_1280.jpg" alt="parakeet">
                <img id="slide-2" src="https://cdn.pixabay.com/photo/2025/04/28/17/02/acacia-9565430_1280.jpg" alt="acacia">
                <img id="slide-3" src="https://cdn.pixabay.com/photo/2025/06/18/08/31/wheat-9666681_1280.jpg" alt="wheat">
            </div>

            <div class="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
            </div>
        </div>
    </section>
    <!----------->
```
```css
        /*max-width จำเป็นไม่งั้นใหญ่เกิน*/
        .container {
            max-width: 400px;
            width: 100%;
        }

        .slider {
            display: flex;
            aspect-ratio: 3 / 4; /* ขนาดรูป*/
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
            border-radius: 12px;
            overflow-x: auto;

            /* ซ่อนแถบเลื่อน */
            scrollbar-width: none;
            -ms-overflow-style: none;
        }

        /* ซ่อนแถบเลื่อน */
        .slider::-webkit-scrollbar {
            display: none;
        }

        .slider img {
            flex: 1 0 100%;
            scroll-snap-align: start;
            object-fit: cover;
            border-radius: 12px;
        }

        /* ตุ่มเลื่อน */
        .slider-wrapper {
            position: relative;
            margin: 0 auto;
        }

        .slider-nav {
            display: flex;
            column-gap: 1rem;
            position: absolute;
            bottom: 1.25rem;
            left: 50%;
            transform: translate(-50%);
            z-index: 1;
        }

        .slider-nav a {
            /* ขนาดตุ่มเลื่อน  */
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            background-color: #fff;
            opacity: 0.7;
            transition: all ease 250ms;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .slider-nav a:hover {
            opacity: 1;
            transform: scale(1.2);
        }

        /* เพิ่มเอฟเฟกต์เมื่อคลิก */
        .slider-nav a:active {
            transform: scale(0.9);
        }
        /*--------------*/
```




