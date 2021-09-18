import fetch from 'node-fetch';
import { parseString } from 'xml2js';
import fs from 'fs';
import path from 'path';

(function() {
   parseFeedBurnerFeed('Film Junk Podcast', 'http://feeds.feedburner.com/filmjunk?format=xml', 'filmjunk-podcast');
   parseFeedBurnerFeed('Game Junk Podcast', 'http://feeds.feedburner.com/GameJunkPodcast?format=xml', 'gamejunk-podcast');
   parseFeedBurnerFeed('Ball Junk Podcast', 'http://feeds.feedburner.com/BallJunkPodcast?format=xml', 'balljunk-podcast');
})();

async function parseFeedBurnerFeed (type, url, key) {
   const response = await fetch(url);
   const xml = await response.text();

   parseString(xml, function (err, result) {
      // console.dir(result.rss.channel[0].item[0]);
      // return;

      let out_array = [];

      result.rss.channel[0].item.forEach(_item => {
         out_array.push({
            type: type,
            title: _item.title[0],
            slug: slugify(_item.title[0]),
            mp3_link: _item.link[0],
            description: _item.description[0],
            date: new Date(_item.pubDate[0]).toISOString(),
         })
      });

      // console.log(out_array);
      fs.writeFileSync(path.resolve() + '/content/' + key + '.json', JSON.stringify(out_array), { flag: 'w+' });
  });
}

function slugify(text) {
   return text
     .toString()                     // Cast to string
     .toLowerCase()                  // Convert the string to lowercase letters
     .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
     .trim()                         // Remove whitespace from both sides of a string
     .replace(/\s+/g, '-')           // Replace spaces with -
     .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
     .replace(/\-\-+/g, '-');        // Replace multiple - with single -
 }