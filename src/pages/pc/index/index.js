import '../../../main'
import '../index/index.styl'
// import Swiper from "swiper"
window.onload = () => {
  layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function() {
    var laydate = layui.laydate //日期
    ,laypage = layui.laypage //分页
    ,layer = layui.layer //弹层
    ,table = layui.table //表格
    ,carousel = layui.carousel //轮播
    ,upload = layui.upload //上传
    ,element = layui.element; //元素操作 等等...

    /*layer弹出一个示例*/
    layer.msg('Hello World');
  });

  

  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
}