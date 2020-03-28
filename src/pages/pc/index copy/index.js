import '../../../main'

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
}