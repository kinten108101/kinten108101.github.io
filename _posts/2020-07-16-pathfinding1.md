---
layout: post
title: "0. OF-PM "
date: 2020-07-17T04:50:50.303Z
thumbnail: /assets/image/jv0r-drkici4i0fofwljimkq8sl6cfrviahihpb_qnk.jpg
tags: pathfinding ml project
excerpt: On the Fly Path-finding Mechanism, an ML project that will never pan out!
---
A perceptron is a simple, shallow neural network that accepts an input, through some activation units, then an output - 3 layers. In a CNN Convolutional Neural Network, they are 1-dimensional FCLs Fully Connected Layers (aka FLCL)

A CNN Convolution is consisted of convolutional and pooling layers (scanning filter-like layers that capture prominent features) and FLCLs. LeNet, introduced by Yann LeCun et al, is among the oldest and simplest CNNs, which gathered a cult following of geeks and researchers. There are now AlexNet, VGG, GoogLeNet, ResNet, InceptionNet, ...

![](https://www.researchgate.net/profile/Yiren_Zhou/publication/312170477/figure/fig1/AS:448817725218816@1484017892071/Structure\-of\-LeNet\-5.png "LeNet first brought the concept of CNN to mainstream ML in 1998")

These are primarily backends for object classification (labelling an image with an object). In contrast, object detection (involves localization, the bounding-boxing of objects on the screens then classification) is relatively novel, with models namely Fast/Faster/Masked R-CNNs, SSD, YOLOv2/v3/v4, .... Home computers from laptops to mobile phones are il-suited for this task.

CNN Convolutional Neural Network is a subset of DNN Deep Neural Network which is part of ANNs Artificial Neural Network - the major field in ML Machine Learning, a method from the study of AI Artificial Intelligence. This coverage won't encompass my detailed research all told, rather a highlight of intruging bits and pieces, including some jargons. 

As a long time GTA player, it was hard not to revere its driving AI, whenever being chased or hailing a taxi. I pitched this concept months ago, originally out of boredom during quaratine, now as a long term project that will carry this year onward. But since I've only entered this field of late, my meagre command had caused many obstacles. 

# Setup

## Python + libraries:

\| - tensorflow@1.15.0 (+keras)

\| - opencv@3.x.x (+numpy)

## Object Detection Architecture

\| - output: YOLOv3 (from opencv)

\| - backend: mobilenetv2 (from opencv)

\| - custom dataset

## Arduino + libraries

\| - Arduino Uno R3

\| - ESP32-CAM (+esp32 library)

\| - MPU6050

\| - an RC car, borrowed.

\| - a Drone, borrowed.

## Miscellaneous + tools

\| - BB-EI, an image labeller

# Episode 0: From Scratch

The first month was spent on filling my knowledge gaps by reading up on Towards Data Science, PyImageSearch, and Coursera. 

Most confusion and ignorance, I realized, stems from either me as a skating amateur or the lack of proper beginner-friendly material - as in the way every article expects a certain level of knowledge in hindsight. I recommend any beginner to start from the ground up, that is, mastering the traditional regression models, than perceptrons, ... until you acclimatized yourself to higher-levelled models.

Another key respect is more physical: specs. Does your machine possess a separate GPU? How much RAM does it have, over 8 gigs, 16 gigs? How about access to TPUs, cloud ML, API support? Answering these requirements means an easier life, otherwise you'll have to pesevere in optimizing your training, much less realtime performance.

Intentionally or not, I could only base this on my laptop, Intel Intergrated GPU (as in none), 8 gigs and a tight budget. Hopefully, this may breed innovations. 

## First attempts

### 1. Darknet, where it started

YOLO by all means is the fastest object detection model and also the most famous. The top hit on Google led me to Darknet and Redmon et al's original implementation in C++ (<https://pjreddie.com/darknet/>). Thankfully, there's Darkflow, a port to Python by a fellow Vietnamese thtrieu. After some struggle, I got it to work: the demo, with facecam on. I used YOLO-Tiny, both weights and config, and got marginally results. Truth is, YOLO was fast, but couldn't be handled by such low-powered machines as was my laptop. 

We'll revisit this story later, but for now, let's jump to present days.

## Present - Caffe,

2. Mobilenet-SSD