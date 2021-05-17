---
layout: post
title: "Part 1: Physics Implementation."
author:
  - Kinten
date: 26/04/2021
thumbnail: /assets/image/randomsign.jpg
tags: EBC
excerpt: excerpt
---
This is the second part of an ongoing series where I build a prototypical VR game.

Sources: https://www.youtube.com/watch?v=qqOAzn05fvk

It's essential that physics exist to give depth to a virtual environment.
There's also something else. For example, I'd want to create a walking creature but procedurally animated. Or on more related terms, I'd like the players hand to be visible, including procedurally animated arms with elbows. Mastering the physics is essential to setting up our environment, and it could also be daunting, or unnecessary.

Last time I implemented this:
https://www.youtube.com/watch?v=qqOAzn05fvk
But I did it blindfolded. I got the grip of that system, but it is poorly written and optimized. Not to mention, I got it wrong, so it is not scalable. In this post I'll walk you through the correction process, and perhaps we could both learn more physics together. Next episode, maybe, we'll dive into the Cardboard setup.

```
if (!freeAnkle){
  root0 = joint[0].transform.position;    
  pole0 = plane.ClosestPointOnPlane(pole.transform.position);
  joint0 = plane.ClosestPointOnPlane(joint[j].transform.position);

  RootToJoint = joint0 - root0;
  //DrawLine(joint0, root0, Color.green);
  RootToJointDis = Vector3.Magnitude(RootToJoint);

  RootToPole = pole0 - root0;
  //DrawLine(pole0, root0, Color.blue);
  RootToPoleDis = Vector3.Magnitude(RootToPole);

  Joint0ToJoint = joint[j].transform.position - joint0;

  RootToPole *= (RootToJointDis/RootToPoleDis);
  joint0 = RootToPole + root0;
  joint[j].transform.position = Joint0ToJoint + joint0;
  //angle = Vector3.SignedAngle(RootToJoint,RootToPole, PlaneNormal);

//joint[j].transform.RotateAround(Vector3.Normalize(PlaneNormal),angle);
```

* Difference: modifying the vector directly instead of using a signed angle. More lines, not optimal?
* Difference 2: leg axis vs section axis. No idea why I made it differently.
* new code for pole, notice how I added new conditions:

```csharp
void ResolvePole(){
  if (pole != null && j-1>0 && j+1<joint.Length-1){
      Vector3 PlaneNormal = joint\[j-1].transform.position - joint\[j+1].transform.position;
      Plane plane = new Plane(PlaneNormal,joint\[j-1].transform.position);
      Vector3 pRoot = joint\[j-1].transform.position;    //Root position, which is already on plane
      Vector3 pPole = plane.ClosestPointOnPlane(pole.transform.position); //Pole position projected on plane
      Vector3 pJoint = plane.ClosestPointOnPlane(joint\[j].transform.position); //Current Joint position projected on plane
```