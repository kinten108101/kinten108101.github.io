---
layout: post
title: The Linux Experience, Tập 1.
author:
  - Kinten
date: 18/06/2021
thumbnail: /assets/image/thriftyfoolishindianrhinoceros-size_restricted.gif
tags: Log Linux Ubuntu typing
excerpt: "During my time developing a Unity prototype, I concluded that Linux
  should be my next operating system. While few could deny the hardship and
  countless hours on Stack Overflow that entail, eventually I settled on the
  idea, for one and one sole reason only: change."
---
Windows 10 has been here to stay for over 5 years, and under no circumstances can me abandoning it be satisfactorily justifiable. Where logic fails, my heart tells me that sooner or later the switch will happen, so there would be no point in delaying it anyway. Also, it is now summer. Even taking into account the pandemic rampaging in my area, and both my prepping and scholarship-hunting process (that is going nowhere), I remain confident that this will be a fantastic time when school is no issue. 

The loss is to be felt, and procrastination stemming from perusing this novel system is inevitable and will be full-blown, putting more strain onto an already tight prepping schedule. Yet, even after that one time canceling the installation at the last moment, the following day my instinct took hold of me, and along the ride, I came. 

Of course, not everything about Linux, or in this case its distro Ubuntu (just because), is doubtful. Its fair share of benefits is quite worth the recognition. One time I opened up System Monitor (the Ubuntu equivalent of Task Manager) to realize that my RAM usage was 26%! Somewhere between that, and it was when I closed all windows. In comparison, the lowest I could obtain on Windows was 31%, accounting for the decimals. I may be wrong here (which means that more research must be put into it) but it might go to show just how much more optimized and decluttered Linux systems are. 

*It will take hours on end to reiterate my journey because it went way back in late February / early March when I first installed Ubuntu. To make it brief, it was me in the middle of a tardy video-editing project that broke the computer: the Windows 10 bootloader was broken for unapparent reasons (I probably overheated the machine, but that remains no sound cause). With a multi-purpose Pixel 3 and a USB stick thankfully equipped with an OTG USB (as in On-the-go, this one serves as a USB-3.0-to-Type-C converter), I thought of reinstalling Windows but then realized the (un)timely opportunity to try out a Linux distro instead. And so I did.*

Eventually, I was obliged to switch to Windows because it was the very After Effects that I needed, then I finished the project on time, receiving good reviews from friends and family and disheartening ones from myself, then losing the video competition to a deskmate, end of story. Three months later, I decided to pick up Ubuntu again, and here we are. [](https://www.youtube.com/watch?v=f6zqM6swPSg&list=PLUagNmqMoHJqzu0EQi1RG2DB4vDFj_YC9&index=1)

*[You could see the video here](https://www.youtube.com/watch?v=f6zqM6swPSg&list=PLUagNmqMoHJqzu0EQi1RG2DB4vDFj_YC9&index=1). It has got 2 likes or something.*

Not sure what I feared most when it comes to using Linux. The terror from sleepless nights not figuring out how to install the most minute features? The sudden nostalgia of video games and how they are now ancient relics of the past? The fear of not prepping hard enough for the IELTS test because I'm multitasking in the meantime between it and perusing a newly installed OS?

# The input module problem.

On an unrelated note, my endeavor to make ibus-bamboo functional has come into semi-fruition. To recap, for a while now, I've been struggling to work out typing in Vietnamese. There used to be a Windows program called Unikey that allows this (later on I realized that Windows supports Vietnamese keyboard anyway). On Ubuntu at least, there are multiple input modules to choose from. I chose iBus. And when it comes to that, there are ibus-unikey, ibus-bamboo, ibus-teni, and some others. There's also the standalone Unikey program, but that performed poorly, or at least I was out of depth with CMake. I refused further testing anyway. 

I did come across similar issues claimed on Github, and there are varying solutions to this. Heck, I came to learn that our problems were not identical.

One solution pertains to ENV. On Windows, we are already familiar with the concept of environment variables, one of which is PATH. Similarly, on Ubuntu there's ENV, [documented here](https://help.ubuntu.com/community/EnvironmentVariables). The gist is that in shells there are these *shell variables* that can be created, called and serve a multitude of purposes, one of which is to be made system-wide available, or global, thus *environment variables*. These variables are written in a range of files scattered throughout the system, even in the user's folder, and are called upon start-up and once the user logged in.

`export` is one command to both set and *globalize* a variable. Thus, when I used `GTK_IM_MODULE=XIM`, it worked (to make it permanent I even pasted it in `~/.profile` where its likes are called). As a twist, however, the effect only kicked in when certain apps are opened from the terminal (that is, not from the `.desktop`). This means that, currently, for me to type Vietnamese on Opera, the app must be started from bash which will be left open and printing until the app is closed. Not efficient.  

{% include image-inline.html type="middle" width="100" src="/assets/image/gotiengviet.gif" alt="The original obstrusive typing experience. For Opera, I had to start the app from bash, the version otherwise will not be recognized by ibus IM." %}

Specifically, I heard that apps downloaded from, or handled by, Snap are experiencing these kinds of issues: or as some Vietnameses put it, they are not supported. In reality, after some testing, I found that this may not necessarily hold. Granted that Opera and VSCode, formerly snap-based, are compatible with the ibus input module after being reinstalled from .deb instead, there remain others who are the exceptions by not being functional with ibus despite not being sourced from snap, and even such groups make no sense. For example, the search bar in the overview can be typed Vietnamese in, but not the bar in Settings, both of which are system, GNOME apps. 

Paying attention to the im-config message, I noticed that there is a list of compatible GUI frameworks. QTK is only one among a list of such likes, like QT4, QT, QT Clutter, QLFW, the last few of which are not built in. In all honesty, if they were of any importance then their installation should be the default. Perhaps it is but a raw string as a message, a general warning. Perhaps certain libraries will be installed as required by their apps.

QT4, GTK, Electron, ... are *widget toolkits*, frameworks that enable GUI development. They are about widgets and canvas manipulation.

OpenGL is a programming language for low-level 3d rendering. In reality it could aid 2d rendering as well by providing GPU acceleration for rendering-intensive tasks like anti-aliases (correct me if I am wrong). Plus, some frameworks include GL-based libraries, middle-men that handle the integration of both parties. GLFW and Clutter are such likes.

*I've fiddled with QT4 in the past, not directly, however, but during my time learning ML when I had to MacGyver an annotation program with OpenCV which was equipped with QT4. Indeed it was so seamlessly integrated with another library that I did not realize it until I had to google the problems when the topical QT4 issues were the first to hit. Compare this to Windows API, which was such a rigid and wordy language for making GUIs that I have never had the gut to touch it again.*

Before I dropped off, there I came across an article, which I've already seen, reminding people that exporting the above variable works (as in setting the system env, so far as I see it, though it's called export for unapparent reasons; I tried 'set' but nothing happened). That's been how I live by.

Anyway, my experience with Vietnamese typing on Linux, albeit it's Ubuntu technically and much as I am grateful that it is possible in the first place, has been unpleasant. To say that it is a disaster is impolitic, a disheartening disregard, but to claim otherwise, as in it being somewhat functional, is me being tolerant towards the system's, or perhaps my own inefficiency, or to be blunt, incompetence. The chance of getting it to work is 50/50. To rate my tolerance, it's 80% of the time since I've found methods to manage through, albeit that does not improve its reputation. Typing on Messenger is fine enough, until some random points when it lags like hell. There are no working, recommendable text editors that are local, except for VSCode, which is a code editor funnily enough, but on which I made a draft for a serious work-related post anyway. It pains me to even complain about it.

- - -

After some digging, I finally made a switch to the fcitx input module, which is designed more for KDE desktop environments but works on GNOME through some modifications. I will not discuss the process [which has been better explained by Nguyễn Tứ](https://www.sitecuatui.com/fcitx-unikey/). 

To be able to type at all has been a wish come true, but it still takes time to familiarize myself with some slight input changes. 

Long story short (particularly read from [here](https://lewtds.github.io/2014/07/31/uoc-mo-bo-go-kieu-unikey/) and [here](https://hi.imnhan.com/posts/ibus-is-dead-to-me-use-fcitx-instead-vi/)), there are various methods that programs adopt to provide a seamless typing experience. Take Vietnamese, specifically using the TELEX typing convention. Keying in two consecutive *a* will return *â*, but the original *a* must also be deleted, or *backspaced*. Unfortunately, the many layers in the system that governs the program and its input render such action difficult to perform. Methods are devised not only to crop out artifacts but also to ensure clarity and focus in UX. 

{% include image-inline.html type="left" width="50" src="/assets/image/gotiengviet3.gif" alt="Typing with fcitx-unikey." %} The method above was backspacing, where character changes are purposefully shown where the inputs are. `fcitx-unikey` uses pre-editing. A small box will pop up showing my input (converted to Vietnamese), and that conversion will not be officially keyed in until I've finished the word. It has probably been like that for other languages in East Asia, such as in the neighboring China, Korea and Japan (I can confirm this with the mobile Japanese keyboards). 

For me, a long-time Unikey follower, it is my first time, but at least a step to the right direction. In retrospect, I have rarely described myself as a staunch. In the past, I've abandoned Unikey for the default Windows 10 input method anyway. This should be no big deal, and I am glad to reach a conclusion of some sort, even at 3:00 AM.

End of part 1.
