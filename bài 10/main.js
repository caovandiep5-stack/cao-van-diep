const animals = [
    {
        name: "sư tử",
        avatar: "./image/lion/lion_1.jpg",
        folder: "./image/lion/",
        prefix: "lion",
        imgCount: 8
    },
    {
        name: "ngựa",
        avatar: "./image/horse/horse_1.jpg",
        folder: "./image/horse/",
        prefix: "horse",
        imgCount: 8
    },
    {
        name: "Con voi sát thủ",
        avatar: "./image/killer whale/killer whale_1.jpg",
        folder: "./image/killer whale/",
        prefix: "killer whale",
        imgCount: 8
    },
    {
        name: "chim chào mào",
        avatar: "./image/crested bird/crested bird_1.jpg",
        folder: "./image/crested bird/",
        prefix: "crested bird",
        imgCount: 8
    },
    {
        name: "tê giác",
        avatar: "./image/rhino/rhino_1.jpg",
        folder: "./image/rhino/",
        prefix: "rhino",
        imgCount: 8
    }
];

const danhSachDiv = document.getElementById("danhsach");
const thuVienAnhDiv = document.getElementById("thuvienanh");

// Thêm style cơ bản
const style = document.createElement("style");
style.textContent = `
    #danhsach {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        padding: 20px;
    }
    
    .animal-item {
        width: 180px;
        border: 2px solid #3498db;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        background: white;
        text-align: center;
    }
    
    .animal-item:hover {
        transform: translateY(-3px);
        border-color: #e74c3c;
    }
    
    .animal-item img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    
    .animal-item p {
        margin: 10px 0;
        font-size: 16px;
        font-weight: bold;
    }
    
    #thuvienanh {
        padding: 20px;
        text-align: center;
        min-height: 200px;
    }
    
    #thuvienanh img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        margin: 10px;
        border-radius: 8px;
        border: 2px solid #ddd;
        transition: transform 0.3s ease;
    }
    
    #thuvienanh img:hover {
        transform: scale(1.05);
        border-color: #3498db;
    }
`;
document.head.appendChild(style);

// Duyệt danh sách con vật
animals.forEach(animal => {
    const item = document.createElement("div");
    item.className = "animal-item";

    item.innerHTML = `
        <img src="${animal.avatar}" alt="${animal.name}">
        <p>${animal.name}</p>
    `;

    // Click để hiển thị thư viện ảnh
    item.addEventListener("click", () => {
        hienThiThuVienAnh(animal);
    });

    danhSachDiv.appendChild(item);
});

// Hàm hiển thị thư viện ảnh - SỬA ĐƯỜNG DẪN
function hienThiThuVienAnh(animal) {
    thuVienAnhDiv.innerHTML = `<h3 style="color: #2c3e50; margin-bottom: 20px;">Thư viện ảnh: ${animal.name}</h3>`;

    for (let i = 1; i <= animal.imgCount; i++) {
        const img = document.createElement("img");
        // Sửa đường dẫn: thêm dấu / giữa folder và prefix
        img.src = `${animal.folder}/${animal.prefix}_${i}.jpg`;
        img.alt = `${animal.name} ${i}`;
        thuVienAnhDiv.appendChild(img);
    }
}