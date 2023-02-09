<template>
    <h3 class="header">testo 175 T1 - Temperature data logger</h3>
    <img class="col-1" alt="Product Image" src="../assets/Img.png">
    <p class="col-2">The testo 175 T1 temperature data logger is ideal for
        monitoring storage temperatures and long-term monitoring. It is certified for use in food environments and
        measures and logs temperatures constantly and reliably.</p>
    <div class="col-3">
        <p> <b> € 285.00</b> </p>
        <span class="one"> Available </span><br /><br />
        <button class="btn"><font-awesome-icon icon="fa-solid fa-cart-shopping" /> Add to cart </button><br /><br />
        <p class="underline">price plus shipping costs</p>
        <p class="underline">Delivery time: 3 - 5 working days</p>
        <p class="underline">Inquiry</p>
        <p class="underline">07653 8349 659-7</p>

    </div>
</template>



<script>
export default {
    name: 'ProductP'

}


</script>

<style>
[class*="col-"] {
    float: left;
    padding: 15px;
    margin: 10px;
}

.col-1 {
    width: 25%;
}

.col-2 {
    width: 33%;
}

.col-3 {
    width: 20%;
    border-style: outset;

}


.header {

    padding: 15px;
}

.Pimg {

    width: 25%;

}

.description {
    width: 33.33%;

}

.Cart {
    position: relative;
    top: 100px;
    right: 50px;
    width: 300px;


}

span:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.one:before {
    background: green;
}

.btn {
    background-color: rgb(234, 170, 73);
    border: none;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;

}

.underline {

    text-decoration: underline;
}
</style>
