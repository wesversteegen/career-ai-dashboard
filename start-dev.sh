#!/bin/bash
cd /Users/wes/Desktop/Dashboarding && exec npx next dev --turbopack -p ${PORT:-3000}
