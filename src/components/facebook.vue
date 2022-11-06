<template>
    <div>
        <iframe class="facebook" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FNGUmainpage%2Fvideos%2F352250187104656%2F&show_text=true&width=560&t=0"  style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> 
    </div>
</template>

<script>
export default{
    name: 'facebook'
}

</script>


<style>
.facebook{
    width:560px;
    height:429px;
}
@media (max-width: 992px) {

    .facebook{
    width:100%;
   margin-bottom: 20px;
}

}

</style>