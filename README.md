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

How to download a file of the latest release
----------

### Download file by name

In your markdown files in the repository or in your github pages, add a link:

    https://niccokunzmann.github.io/download_latest/<FILE>
    https://niccokunzmann.github.io/download_latest/<USER>/<REPOSITORY>/<FILE>

Replace `<FILE>` with the name of the file to download from the releases.
If you want to specify repository and user, you can do so.

### Download file by index

If you are looking for a static way to download a file with index,
without taking consideration of the file name,
this is the option you are looking for

Ad the query parameter to the url like this: `?index=0..n`

 - The first file has index 0.
 - When index is set, it downloads the file with that index from the latest release files. Example: `?index=5`
 - If index is not set, the first file is downloaded. `?index=`
 - If the index parameter is set, the file name is ignored.

```
https://chlegou.github.io/download_latest/chlegou/bitbot/?index=0 // will download the 1st file in the latest release 
https://chlegou.github.io/download_latest/chlegou/bitbot/?index=5 // will download the 6th file in the latest release 
```

**IMPORTANT:** In case of multiple files, you must take consideration of the files' order in the releases.
They must follow the same order always.
Adding files may break the order.

Contribute
----------

If you like to add a feature, please create a pull-request.
We want to follow [CCCC](https://rfc.zeromq.org/spec:42/C4).

Related Work
------------

This was creates as an answer to [this Stackoveflow question](http://stackoverflow.com/questions/24987542/is-there-a-link-to-github-for-downloading-a-file-in-the-latest-release-of-a-repo).

Credits
-------

Work be [niccokunzmann](https://github.com/niccokunzmann) and [chlegou](https://github.com/chlegou).
