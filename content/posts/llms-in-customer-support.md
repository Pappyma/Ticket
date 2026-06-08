---
slug: llms-in-customer-support
title: "LLMs in Customer Support: Hallucination vs Reality"
excerpt: "AI that makes up answers is worse than no AI at all. Here's how grounding keeps a support agent honest — and what to watch for before you trust one with customers."
date: "Jun 5, 2025"
category: Technology
readTime: 8 min read
imageColor: bg-purple-500
draft: false
---

There's a real fear that stops a lot of businesses from using AI for support:
*what if it just makes things up?*

It's a fair worry. You've probably seen the headlines — a chatbot confidently
telling a customer about a refund policy that doesn't exist, or inventing a
product feature out of thin air. In the AI world this is called a
"hallucination," and in customer support it's a genuine problem. A wrong answer
delivered confidently can be worse than no answer at all.

So let's talk honestly about why it happens, and how a well-built AI support
agent avoids it.

## Why AI "makes things up" in the first place

A large language model (the technology behind modern AI assistants) is, at its
core, a very sophisticated pattern-matcher. It has read an enormous amount of
text and learned what words tend to follow other words. Ask it a question and it
produces an answer that *sounds* right based on those patterns.

The trouble is, "sounds right" and "is right" aren't the same thing. If the model
doesn't actually know the answer to a question about *your* business — your
return window, your shipping times, your specific product — it will sometimes
fill the gap with something plausible-sounding instead of admitting it doesn't
know. That's the hallucination.

The key insight: this happens when the AI is left to answer from its general
training instead of from your real, specific information.

## The fix: grounding

The solution is a technique called "grounding." Instead of letting the AI answer
from memory, you connect it to your actual sources of truth — your help docs,
your policies, your product catalog, your order system — and instruct it to
answer *only* from that material.

Now when a customer asks "what's your return policy?", the AI doesn't guess. It
looks up your real policy, pulls the relevant section, and answers based on that.
If the information isn't in your sources, a properly built agent is designed to
say "I don't have that information, let me connect you to someone" — instead of
inventing an answer.

Think of it like the difference between an employee answering from memory versus
one who checks the official handbook before responding. The handbook version is
the one you trust with customers.

## "100% accurate" is the wrong promise

Here's where we'll be straight with you, because plenty of vendors won't be: no
AI system is perfectly accurate, 100% of the time. Anyone promising that is
overselling.

What grounding does is dramatically *reduce* the chance of a made-up answer, and
keep the AI's responses tied to information you control and can update. That's
the realistic, honest goal — not magic, but a system that stays inside the lines
you draw for it.

## What to look for before you trust an AI agent

If you're evaluating an AI for support, ask these questions:

- **Where does it get its answers?** It should pull from *your* content, not just
  its general training.
- **What happens when it doesn't know?** A good agent hands off gracefully rather
  than guessing.
- **Can you update what it knows?** If your policy changes, you should be able to
  update the source and have the AI reflect it — not retrain from scratch.
- **Is it built on infrastructure you can trust?** Running on established cloud
  platforms like Google Cloud means your data is handled on serious,
  enterprise-grade systems rather than something improvised.

## The bottom line

The fear of AI making things up is valid — but it's also solvable. Grounding
turns an AI from an unpredictable improviser into a reliable assistant that
answers from your real information. It won't ever be flawless, and you should be
wary of anyone who claims otherwise. But done right, it's trustworthy enough to
put in front of customers for the everyday questions that make up most of your
support volume.

Honest beats impressive. An AI that knows its limits is one you can actually
rely on.
