---
title: "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography"
author: Simon Singh
year: 2000
isbn: 9780385495325
pages: 432
slug: singh-code-book
started: 2024-05-15
finished: 2025-07-14
pct: 100
stars: 3
who: Tim
---

Despite taking a long time to get into this one (I started this one but didn't make it through the first chapter before letting it sit for about 10 months), I think I'm happy with where I landed with this book. I took a class on cryptography as part of my math degree, the majority of which was dedicated to learning about RSA and elliptic curve based cryptosystems. Today, encryption is so ubiquitous that having working knowledge of its primary instantiations feels necessary for the average citizen. However, the journey to RSA/ECC was incredibly long.

As long as civilizations have existed, humans have sought ways to pass secrets securely to one another. Singh's book provides a compact survey of the ebb and flow between the twin disciplines of cryptography (the study of encryption/code-crafting) and cryptanalysis (the study of code-breaking) over much of human history. The earliest forms of encryption were simple substitution and shift ciphers, which scramble messages by swapping single characters/symbols according to fixed rules. For those that can read the language of the plaintext, ciphertext created using one of these methods holds visible patterns that can be used to break the encryption. Specifically, the distribution of written characters in a language isn't uniform; using English as an example, characters such as 'e' and 's' are much more common than 'q'. The process of examining ciphertext by tallying the distribution of its characters is called _frequency analysis_. For a long period, this approach was a key tool that cryptanalysts used against cryptographers.

- technological change prompts updates to methods used for encryption/cryptanalysis
  - Vignere Cipher was thought to be unbreakable, Babbage broke it
- book covers some interesting examples, like the Beale papers/treasure, which use a book cipher
- we're always coping with the relative strength of encryption
  - stronger encryption puts greater weight on human factors
  - always flowing back and forth
  - cutting edge encryption feels unbreakable, until it isn't?
  - but this is where Singh leaves us, with the promise of Quantum cryptography

_The Code Book_ was published in 1999, which makes its final chapters an interesting time capsule for how debates about digital privacy were cast during that liminal point. _The Code Book_ is primarily focused on the practice and methods related to encryption/cryptanalysis, rather than the socio-technical aspects of encryption technology. However, I couldn't stop thinking about how this book was 14 years before the Snowden leaks. I don't think Singh can be blamed for not foreseeing the level of surveilance that typifies our current era, but he appears to give a sizable amount of weight to the claim that crackable encryption should be permitted in order for law enforcement to monitor criminal activity.
