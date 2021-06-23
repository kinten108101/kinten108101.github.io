---
layout: post
title: The Linux Experience, Tập 1.
author:
  - Kinten
date: 18/06/2021
thumbnail: /assets/image/thriftyfoolishindianrhinoceros-size_restricted.gif
tags: Log Linux Ubuntu
excerpt: Windows 10 has always been there for me for over 5 years and there is
  no way a sound justification or objective reason behind abandoning it. Where
  logic fails, my heart tells that sooner or later the switch will happen, so
  there would be no point in delaying it anyway, not to mention the crazy time
  that is summer is coming to its climactic point (usually it is the time when I
  do my hobbies).
---
During my time developing the EBC prototype, I came to the conclusion that Linux should become my next operating system. While few could deny the hardship that this will imply, given the OS's reputation derived much from its incompatibility, eventually I set my mind on greenlighting the idea anyway for one and one sole reason only: change.

Windows 10 has always been there for me for over 5 years and there is no way a sound justification or objective reason behind abandoning it. Where logic fails, my heart tells that sooner or later the switch will happen, so there would be no point in delaying it anyway, not to mention the crazy time that is summer is coming to its climactic point (usually it is the time when I do my hobbies). 

It is definite that the loss of conveniences brought to me by Microsoft will be felt, and that procrastination from perusing the novel system is inevitable and will be rampant, putting more strain onto an already tight prepping schedule; yet, even after that one time canceling the installation at the last moment, the following day my instinct took hold of me, and along the ride, I came. 

Of course, not everything about Linux, or in this case its distro Ubuntu (just because), is doubtful. Its fair share of benefits is quite worth the recognition. One time I opened up System Monitor (the Ubuntu equivalent of Task Manager) to realize that my RAM usage was 26%! Somewhere between that, and it was when I closed all windows. In comparison, the lowest I could obtain on Windows was 31%, accounting for the decimals. I may be wrong here (which means that more research must be put into it) but it might go to show just how much more optimized and decluttered Linux systems are. 

> I'm juggling between Ubuntu and Linux here, the latter for when the case is relatively general on many Linux discos. 

But it will take hours on end to reiterate my journey because it went way back in late February / early March when I first installed Ubuntu. To make it brief, it was me in the middle of a tardy video-editing project that broke the computer: the Windows 10 bootloader was broken for unapparent reasons (I probably overheated the machine, but that remains no sound cause). With a multi-purpose Pixel 3 and a USB stick thankfully equipped with an OTG USB (as in On-the-go, this one serves as a USB-3.0-to-Type-C converter), I thought of reinstalling Windows but then realized the (un)timely opportunity to try out a Linux distro instead. And so I did. 

Eventually, I was obliged to switch to Windows because it was the very After Effects that I needed, then I finished the project on time, receiving good reviews from friends and family and disheartening ones from myself, then losing the video competition to a deskmate, end of story. Three months later, I decided to pick up Ubuntu again, and here we are. 

> [You could see the video here](https://www.youtube.com/watch?v=f6zqM6swPSg&list=PLUagNmqMoHJqzu0EQi1RG2DB4vDFj_YC9&index=1). It has got 2 likes or something.

Not sure what I feared most when it comes to using Linux. The terror from sleepless nights not figuring out how to install the most minute features? The sudden nostalgia of video games and how they are now ancient relics of the past? The fear of not prepping hard enough for the IELTS test because I'm multitasking in the meantime between it and perusing a newly installed OS?

- - -

On an unrelated note, my endeavor to make ibus-bamboo functional has come into semi-fruition. To recap, for a while now, I've been struggling to work out typing in Vietnamese. There used to be a Windows program called Unikey that allows this (later on I realized that Windows supports Vietnamese keyboard anyway). On Ubuntu at least, there are multiple input modules to choose from. I chose iBus. And when it comes to that, there are ibus-unikey, ibus-bamboo, and ibus-teni. There's also the standalone Unikey program, but that didn't work out and I refused further testing anyway. 

I did come across similar issues claimed on Github, and there are varying solutions to this. Heck, I came to learn that our problems were not identical.

One solution pertains to ENV. On Windows, we are already familiar with the concept of environment variables, one of which is PATH. Similarly, on Ubuntu there's ENV, the same but can be accessed easily with `$ env` . Now, there are variables that dictate which IM (input module) to use in which app platform. These are: 

As random as it sounds, using `export GTK_IM_MODULE=XIM` works, but only when the app is opened from the console (not from the .desktop). This means that currently for me to type Vietnamese on Opera *như thế này*, the app must be started from the terminal, which will be left open and printing until the app is closed. Not efficient.  

![](/assets/image/gotiengviet.gif)

Specifically, I heard that apps downloaded from, or handled by, snap are experiencing these kinds of issues: or as some Vietnameses put it, they are not supported. In reality, after some testing, I found that this may not necessarily hold. Granted that Opera and VSCode, formerly snap-based, are compatible with the ibus input module after being reinstalled from .deb instead, there remain others who are the exceptions by not being functional with ibus despite not being sourced from snap, and even such groups make no sense. For example, the search bar in the overview can be typed Vietnamese in, but not the bar in Settings, both of which are system, GNOME apps. 

Again, I could be wrong, because my understanding of *platforms* is loosely based, so I'll read up later. Still, that is to give you a sense of what I'm under. 

Paying attention to the im-config message, I noticed that there is a list of compatible libraries, or plugins (whatever refer to Qt4 as). QTK is only one among a list of such likes, like QT4, QT, QT Clutter, QT El. I, however, failed to install them, doing which brought in nothing but errors due to the lack of dependencies that also cannot be installed. In all honesty, if they were of any importance then their installation should be the default. 

Before I dropped off, there I came across an article, which I've already seen, reminding people that exporting the above variable works (as in setting the system env, so far as I see it, though it's called export for unapparent reasons; I tried 'set' but nothing happened). That's been how I live by.

Anyway, my experience with Vietnamese typing on Linux, albeit it's Ubuntu technically and much as I am grateful that it is possible in the first place, has been unpleasant. To say that it is a disaster is impolitic, a disheartening disregard, but to claim otherwise, as in it being somewhat functional, is me being tolerant towards the system's, or perhaps my own inefficiency, or to be blunt, incompetence. The chance of getting it to work is 50/50. To rate my tolerance, it's 80% of the time since I've found methods to manage through, albeit that does not improve its reputation. Typing on Messenger is fine enough, until some random points when it lags like hell. There are no working, recommendable text editors that are local, except for VSCode, which is a code editor funnily enough, but on which I made a draft for a serious work-related post anyway. It pains me to even complain about it.

End of part 1.

- - -

> The early dumpster fire of COVID-19, Trump supremacy and the obscure, triumphant right-wing party in Vietnam, film reviews, the EBC project, anime lists,... Those are just the first of a long line of topics I wished to touch or have touched upon. URORA is no pure tech site but at its core a house of daily topics that I take great interest in, and that are felt personally. I have left this site empty for so long, I have been on hiatus for an unjustifiable amount of time, Kinten has been missing in action not as long as JOHN-117 has but enough to tear his readers apart by simply waiting, and I am mentioning specifically the luyenanhchuyen demographic who could come here. The truth was that there was a plan, there is a plan, and there have always been plans, just that the majority of which were scraped. It is, and I hope that it holds, the same case as that of LEMMINO, or Crowbcat, or Internet Historian, where the wait is justified by quality content. For too long, however, it was for that reason that I further procrastinated. Recently, however, many content creators and life-sized influencers have inspired me to get back on track. Life has not been easy. If there has been one common detail found in my stories, or narratives, it is that I must juggle much. Self-studying on a tight education budget. Projects that I must do. Endless promises with one day remaining the same length. On paper, discipline is key, but however practical it is to obtain it, I rarely discuss, because all I have known is to keep moving forward. That, however, will not prevent me from diving into interesting topics, and to that end, this time I will be more conscious and will not rush to the presumed productivity like countless times in the past. I appreciate it that you have read my posts, the number of which might be singular or plural, but that does not matter, because you have done it to arrive at this point. I hope that you will stick around longer. Fame and popularity through words of mouth are probably my targets, but mainly I adore the discussions, the debates, and the spreading of knowledge, and most importantly because I hope us Earthlings, or Vietnameses particularly, will be more aware of the situation we are in now. The world is crumbling down, not in the manner sung in \*Komm, Susser Tod\*, but close to so. Thank you, and hope to see you again soon. Cheers. :-)
{:title="Hold on!"}