---
title: Analyzing Pin Code Breaches
date: "2025/01/05"
emoji: 🔐
summary: 
    What pin codes do people use?
---

It's 2025, who still uses 4-digit codes? Well, checkout terminals do, although these codes
are nowhere close to the only mechanism to protect consumers, they are a code that many 
consumers set with a level of security knowing that their choice is what stops a perpatrator
from accessing their account. Going from this, I wanted to pursue 4-digit pins as a surrogate 
for how people try to set secure passwords. Afterall, there is a similar balance of needing 
something memorable that you can quickly input but is not *too obvious*. 

This balance is obviously way less defined in the 4-digit pin case compared to alphanumeric 
variable-length passwords with special characters and capitalization. For one, the 
constant-sized constraint of this significantly reduces the ability to tune the speed of
inputing (this is ignoring the fact that you really shouldn't be trying to optimize how fast
it is to input a 4 digit password). The other end of this is 4-digit pins are much less secure
than typical alphanumeric passwords where most sites require more than 8 digits. An optimistic
calculation of an alphanumeric password with 8-12 digits requires a malicious entity to try 
$72^{8}\-72^{12}$ possible combinations. When compared to a 4-digit pin with $10^4$, this is a 
puny amount.

My hope is that this:
1. will be a fun excersize on the axis of the human psychology on password choosing - maybe with some transferable knowledge to more complicated passwords. 
2. serve as a reminder of why using good (high-entropy) password generation techniques are important. (See [Apple Automatic Strong Passwords](https://support.apple.com/guide/security/automatic-strong-passwords-secc84c811c4/web) or [1Password's blog post on generating strong passwords](https://blog.1password.com/how-to-generate-random-password/)).

- TODO: FIDO U2F?

# Data retrival

I will be using the [haveibeenpwned.com](https://haveibeenpwned.com/) API to retrieve information about leaked passwords. 
This is a great website that allows you to check if a password you use has been leaked using a smart mechanism to keep your
password secure. It relies on the basis of hash functions that takes an input string to a long hexadecimal string 
$h(p) \xrightarrow s$ where $p$ is our password and $s$ is a hash of that password. These hash functions are typically hard
to reverse with classical computers. The querying procedure is as follows

1. Take the hash of of your password $s = h(p)$
2. Take the first 5 digits of $s$, $s_{1:5}$ and send this to the API
3. The API will return the frequencies (counts) of all passwords whose hash start with $s_{1:5}$.
   - One of these hashes will be the hash $s$, all the others will be other passwords - typically around 500-1000 other passwords.
   - If a perpatrator found a way to listen to these requests, they won't be able to identify which hash is yours, keeping the password secure.
4. You can compare the ending of your hash and the returned hashes to figure out which entry (if any!) corresponds to your password.
   - If you see an entry, the counts correspond to the number of times its been leaked from the vast amount of leak data [haveibeenpwned.com](https://haveibeenpwned.com/) has been collecting.
   - Not all of those instances will always correspond to your accounts if someone else happened to use the same password. But you can make sure this doesn't happen by choosing a more secure password.

I do the above procedure for all 4-digit pins spanning `0000-9999`.

# Data Time!

Now that we have this data, let's analyze it. One visualization I particularly enjoyed and decided to reproduce using up-to-date data 
is from [the late Nick Berry's blog Data Genetics](http://www.datagenetics.com/blog/september32012/index.html). 


## The O.G. Figure

<center>
<figure>
   <img src="/blog/media/four_pin_code_analysis_heatmap.png" width="75%"/>
  <figcaption>Figure plotting the log-counts of various 4-digit pins where the x-axis and y-axis are the first and last two digits of the pincode respectively. It's easy to see correlations in the data,
  such as the diagonal representing repated doublets (code of the form $c_1c_2c_1c_2$) or the vertical feature at 19/20 corresponding to passwords with the basis of years under them (for example, codes based on birthdays).
  </figcaption>
</figure>
</center>

## What years are code-years

Let's zoom in on the vertical feature from the above plot

<center>
<figure>
   <img src="/blog/media/four_pin_code_analysis_1900s.png" width="100%"/>
  <figcaption>Figure plotting the frequency of codes that start (left subplot) and end (right subplot) with 19. We can see that the frequency of passwords that stay with 19 are much more common than
  other random passwords (median in red) and than passwords with 19 in the last two digits. This means that the 19 at the beginning has
  some entropy to it.
  </figcaption>
</figure>
</center>

The next thing I wanted to look at was what was the distribution of years people 

<center>
<figure>
   <img src="/blog/media/four_pin_code_analysis_year_fit.png" width="75%"/>
  <figcaption>
  </figcaption>
</figure>
</center>
TODO: text

# The diagonal feature

TODO: text
<center>
<figure>
   <img src="/blog/media/four_pin_code_analysis_diag.png" width="75%"/>
  <figcaption>
  </figcaption>
</figure>
</center>
TODO: text

# Common Digits

TODO: text
<center>
<figure>
   <img src="/blog/media/four_pin_code_analysis_common_digits.png" width="75%"/>
  <figcaption>
  </figcaption>
</figure>
</center>
TODO: text

# Other fun facts

TODO: text
<center>
<figure>
   <img src="/blog/media/four_pin_code_analysis_heatmap_highlighted.png" width="75%"/>
  <figcaption>
  </figcaption>
</figure>
</center>
TODO: text

A bright pixel in the heatmap above corresponds to the codes `1234`, `2580`