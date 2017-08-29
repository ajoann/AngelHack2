# TRC - Trash, Recycle, Compost
This repo contains the code for the website, to view all the TRC interactions, and the code for cloud functions of the Particle Photon.

For the code within the iOS app, see https://github.com/ahijaouy/AngelHack2k1

## Overview

This is code for an app that sorts images of "trash" into Recycling, Trash, or Compost, and then sends a signal to a Particle Photon to open the corresponding trash bin.

The process is simple!
* take a picture of an item within our app on your phone
* the picture is sent to Google Vision to interpret the item
* the app indicates to you what category (trash, recycle, or compost) this item falls under
* and simultaneously a Particle Photon receives a signal to the port corresponding to that category
* each interaction is tracked, and a display of all the interactions can be viewed on the website

