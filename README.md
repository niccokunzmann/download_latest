Credits
===============

This project was was originally developed by **@niccokunzmann**.

[https://github.com/niccokunzmann/download_latest](https://github.com/niccokunzmann/download_latest)

download_latest
===============

Download files from the latest release.

Test this as

- link from github Markdown: [https://niccokunzmann.github.io/download_latest/test.txt](https://niccokunzmann.github.io/download_latest/test.txt)
- link from github pages: [https://niccokunzmann.github.io/download_latest/](https://niccokunzmann.github.io/download_latest/)
- release: [https://github.com/niccokunzmann/download_latest/releases/latest](https://github.com/niccokunzmann/download_latest/releases/latest)

How To Use
----------

### Default usecase By Owner

In your markdown files in the repository or in your github pages, add a link:

    https://niccokunzmann.github.io/download_latest/<FILE>
    https://niccokunzmann.github.io/download_latest/<USER>/<REPOSITORY>/<FILE>

Replace `<FILE>` with the name of the file to download from the releases.
If you want to specify repository and user, you can do so.

### Awesome Feature

If you are looking for a static way to download a file with index, without taking consideration of the file name, i have added an option to download files by index.

I have implemented it this way: `?index=0..n`

 - When index is set, it download the file with that index from the latest release files.
 - If not set, it automatically bind the first file.
 - If a file name was set, it will behave normally as repository owner made it.

#### See it in action:

    https://chlegou.github.io/download_latest/chlegou/bitbot/ // will automatically bind the first file in the latest release
    https://chlegou.github.io/download_latest/chlegou/bitbot/?index=5 // will download the 5th file in the latest release 
    
**IMPORTANT:** In case of multi files, you must take consideration of file's orders in releases (they must follow the same order always to have it working right).

follow 
[this](https://github.com/niccokunzmann/download_latest/issues/3)
issue for more details.

see changes from 
[here](https://github.com/chlegou/download_latest/blob/8720051371b81c94ec629bc64e37342c7440b8ef/_includes/github.js#L35-L44)
for code details.


Contribute
----------

If you like to add a feature, please create a pull-request.
We want to follow [CCCC](https://rfc.zeromq.org/spec:42/C4).

Related Work
------------

This was creates as an answer to [this Stackoveflow question](http://stackoverflow.com/questions/24987542/is-there-a-link-to-github-for-downloading-a-file-in-the-latest-release-of-a-repo).
