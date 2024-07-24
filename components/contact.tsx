'use client';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { BackgroundGradient } from './ui/background-gradient';
import { Textarea } from './ui/textarea';
import MouseTrackAnimation from './ui/mouse-track-animation';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { sendEmail } from '@/actions/email';
import { BackgroundBeams } from './ui/background-beams';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 mb-10 relative">
      <div className="flex flex-col items-center justify-center">
        <BackgroundGradient>
          <Card className="w-full sm:w-[40rem] rounded-3xl">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <form action={sendEmail} className="space-y-6">
                <div>
                  <Label className="mb-3">Email</Label>
                  <MouseTrackAnimation>
                    <Input
                      name="senderEmail"
                      type="email"
                      placeholder="Youremail@gmail.com"
                    />
                  </MouseTrackAnimation>
                </div>
                <div>
                  <Label className="mb-3">Message</Label>
                  <MouseTrackAnimation>
                    <Textarea
                      name="message"
                      placeholder="Type your message here..."
                    />
                  </MouseTrackAnimation>
                </div>
              </form>
            </CardContent>
          </Card>
        </BackgroundGradient>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Contact;
