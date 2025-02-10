---
title: Is 4 the magic number in Language Models?
date: "2025/02/05"
emoji: 🧠
summary:
    Why is the MLP input embedding space $4\times$ that the original embedding dimension? How does that affect feature extraction?
post_published: false
---

# Introduction

The Multi-Layer Perceptron (MLP) layer within a transformer typically has an input embedding size that is $4$ times that
of the embedding stream. This is largely (as far as I can tell) a random prefactor that was used back in the early days of
GPTs when we wanted a way for the MLP layer to extract rich features and capture complex relationships between input tokens.
This is a common design pattern in many transformer models, including GPT, where the MLP layer is often set up to 
significantly increase the representation size before contracting it back to the original dimension.

# So why $4$?

# Overfitted Tiny Language Models

<center>
<figure>
   <img src="charactergpt_training_tb.png" style="width: 100% !important;"/>
  <figcaption>
    Training a small language model with 5 different input embedding sizes for the MLP layer. As you increase the width, the model trains and overfits faster.
  </figcaption>
</figure>
</center>

<center>
<figure>
   <img src="charactergpt_training_py.png" style="width: 100% !important;"/>
   <img src="charactergpt_training_py_zoom.png" style="width: 100% !important;"/>
  <figcaption>
    Training a small language model with 5 different input embedding sizes for the MLP layer. As you increase the width, the model trains and overfits faster.
  </figcaption>
</figure>
</center>

Learns slower, but overfits even slower. Overfitting is a function of the small dataset size.

## Model and Training Details

<table border="1" width="100%">
  <thead>
    <tr>
      <th>Category</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>I/O</td>
      <td>
        Evaluation Interval: Every 250 iterations<br>
        Log Interval: Every 10 iterations<br>
        Evaluation Iterations: 200 iterations<br>
        Initialized from random weights
      </td>
    </tr>
    <tr>
      <td>Data</td>
      <td>
        Training: 1,003,854 tokens<br>
        Validation: 111,540 tokens<br>
        Dataset: <code>shakespeare_char</code><br>
        Gradient Accumulation Steps: 1<br>
        Batch Size: 64<br>
        Block Size: 256
      </td>
    </tr>
    <tr>
      <td>Model</td>
      <td>
        Number of Layers: 6<br>
        Number of Attention Heads: 6<br>
        Embedding Size: 384<br>
        Dropout Rate: 0.2<br>
        No bias inside LayerNorm and Linear layers<br>
        MLP Ratio: varied through experiment
      </td>
    </tr>
    <tr>
      <td>Optimizer (AdamW)</td>
      <td>
        Learning Rate: <code>1e-3</code><br>
        Max Iterations: 5000<br>
        Weight Decay: 0.1<br>
        Beta1: 0.9<br>
        Beta2: 0.99<br>
        Gradient Clipping: 1.0 (disabled if 0.0)
      </td>
    </tr>
    <tr>
      <td>Learning Rate Decay</td>
      <td>
        Decay Learning Rate: True<br>
        Warmup Iterations: 100<br>
        Learning Rate Decay Iterations: 5000<br>
        Minimum Learning Rate: <code>1e-4</code>
      </td>
    </tr>
    <tr>
      <td>System</td>
      <td>
        Device: <code>mps</code> on Mac w/ M1 Max
      </td>
    </tr>
  </tbody>
</table>

# What about OpenWebText

Training a GPT-2 like network, due to compute limitations, will be training on $\frac{1}{64}$-th of the amount of tokens
used to train GPT-2.