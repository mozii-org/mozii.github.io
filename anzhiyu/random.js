var posts=["2023/12/24/使用命令行工具破解PDF文件使其可编辑/","2023/12/19/搭建Signal-Server/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };