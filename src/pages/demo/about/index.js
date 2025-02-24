import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader';
import PureHero from '@site/src/components/PureHero/PureHero';
import TwoColumnSection from '@site/src/components/TwoColumnSection/TwoColumnSection'

const App = () => {

  // Bắt đầu thiết lập menu
  const headerMenuItems = [
        { label: "Tài liệu", link: "/docs/intro" },
        { label: "Blog", link: "/blog" },
        { label: "Demo", link: "/demo/text-reveal" },
    ];

    const handleMenuClick = () => {
        console.log("Đã nhấn vào menu trên di động!");
    };

    const handleSearchClick = () => {
        alert("Đã nhấn vào nút tìm kiếm!");
    };

    // Kết thúc thiết lập menu

    return (
        <div>

            <CustomHeader 
                logo="https://docusaurus.io/img/docusaurus_keytar.svg" 
                menuItems={headerMenuItems} 
                textColor="#ffffff"
                onMenuClick={handleMenuClick}
                onSearchClick={handleSearchClick}
                />

                <PureHero 
                title="React Component đơn giản" 
                subtitle="Tùy biến website của bạn với hỗ trợ từ AI trong tầm tay" 
                backgroundImage="https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                buttonText="Khám phá"
                buttonLink="#" /* Thay link vào đây */
                contentWidth="60%"
                contentPosition="center"
                titleColor="#ffffff"
                subtitleColor="#f0f0f0"
                buttonColor="#ffffff"
                navColor="#ffffff"
                />

            <TwoColumnSection
              title = "Bố cục hai cột kèm CTA"
              description = "Có thể điều chỉnh các thuộc tính và tái sử dụng dễ dàng. Khi xem trên di động, nội dung các cột sẽ tự co dãn theo kích thước màn hình."
              buttonText = "Dùng thử"
              buttonLink = "#" // Thay link thực tế vào đây
              titleColor = "#000000"
              descriptionColor = "#333333"
              buttonColor = "#000000"
              imageSrc = "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imageAlt = "Placeholder Image"
              imagePosition = "right"
              columnRatio = '1' // Tỉ lệ bề rộng phần chữ so với hình ảnh
            />

            <TwoColumnSection
              title = "Bố cục hai cột kèm CTA"
              description = "Thay đổi thuộc tính `imagePosition` thành left để hiển thị xen kẽ như thế này. Link gán cho Button cũng sẽ áp dụng cho hình ảnh."
              buttonText = "Shop Serums"
              buttonLink = "#" // Thay link thực tế vào đây
              titleColor = "#000000"
              descriptionColor = "#333333"
              buttonColor = "#000000"
              imageSrc = "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imageAlt = "Placeholder Image"
              imagePosition = "left"
              columnRatio = '1' // Tỉ lệ bề rộng phần chữ so với hình ảnh
            />
            
        </div>
    );
};

export default App;