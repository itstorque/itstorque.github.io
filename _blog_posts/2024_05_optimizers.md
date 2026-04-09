---
title: ML Optimizers
date: "May 03, 2024"
emoji: 🚜
summary:
    An interactive overview of optimizers used for Machine Learning.
---

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>

<script src='https://cdn.plot.ly/plotly-2.32.0.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js'></script>

<p id="out"></p>

<div id="plot_out" style="width: 70vw; height: 70vw;"></div>

<script>
    // Define a model for linear regression. The script tag makes `tf` available
    // as a global variable.
    // const model = tf.sequential();
    // model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // // Generate some synthetic data for training.
    // const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    // const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // // Train the model using the data.
    // model.fit(xs, ys, {epochs: 10}).then(() => {
    //   // Use the model to do inference on a data point the model hasn't seen before:
    //   model.predict(tf.tensor2d([5], [1, 1])).print();
    //   // Open the browser devtools to see the output
    // });

    const xs = tf.tensor1d([1]); 
    const ys = tf.tensor1d([1]); 
    
    const x = tf.scalar(Math.random()).variable(); 
    const y = tf.scalar(Math.random()).variable(); 
    
    // Define a function f(x, y) = x + y. 
    const g = x => (x.square()).add((y.square())); 
    const loss = (pred, label) => 
        pred.sub(label).square().mean(); 
    
    const learningRate = 0.05; 
    
    // Create adagrad optimizer 
    const optimizer = tf.train.adagrad(learningRate); 
    
    // Train the model. 
    for (let i = 0; i < 1000; i++) { 
        optimizer.minimize(() => loss(g(xs), ys))
        // console.log(xs.arraySync())
    } 
    
    // Make predictions. 
    console.log(`x: ${x.dataSync()}, y: ${y.dataSync()}`); 

    const preds = g(xs).dataSync(); 
    
    preds.forEach((pred, i) => { 
        console.log(`x: ${i}, pred: ${pred}`); 
    }); 

    // function f(x) {
    //     const f1 = x.pow(tf.scalar(6, 'int32')) //x^6
    //     const f2 = x.pow(tf.scalar(4, 'int32')).mul(tf.scalar(2)) //2x^4
    //     const f3 = x.pow(tf.scalar(2, 'int32')).mul(tf.scalar(3)) //3x^2
    //     const f4 = tf.scalar(1) //1
    //     return f1.add(f2).add(f3).add(x).add(f4)
    // }

    // function minimize(epochs , lr) {
    //     let y = tf.variable(tf.scalar(2)) //initial value 
    //     const optim = tf.train.adam(lr);  //gadient descent algorithm 
    //     for(let i = 0 ; i < epochs ; i++) //start minimiziation 
    //         optim.minimize(() => f(y));
    //     return y 
    // }

    // z1 = [
    //     [8.83,8.89,8.81,8.87],
    //     [8.89,8.94,8.85,8.94],
    // ];

    function linspace (start, stop, num) {
        return Array.from({ length: num }, (_, i) => start + ((stop-start) / (num-1)) * i)
    }

    // Define the parameters
    const xValues = linspace(-1, 1, 21)
    // const yValues = linspace(-2*Math.PI, 2*Math.PI, 23)
    const yValues = linspace(-1, 1, 21)

    // Create the 2D list Z
    const Z = [];
    for (let i = 0; i < xValues.length; i++) {
        const row = [];
        for (let j = 0; j < yValues.length; j++) {
            const x = xValues[i];
            const y = yValues[j];
            const f = x ** 2 + y**2;
            row.push(f);
        }
        Z.push(row);
    }


    yellow_color = "#FFD400A0"

    var data_z1 = {x: xValues, y: yValues, z: Z, type: 'surface', surfacecolor: yellow_color, name:"f",
    showscale: false,
    colorscale: [[0, yellow_color], [1, yellow_color]]};
    var data_z2 = {x: [-1], y: [-1], z: [Z[0][0]], 
    mode: 'markers',
	marker: {
		size: 12,
		line: {
		color: 'rgba(217, 217, 217, 0.14)',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d'
};

    // Plotly.react('plot_out', [data_z1]);
    
    Plotly.react('plot_out', [data_z1, data_z2]);

</script>