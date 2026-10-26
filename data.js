// Flip-card decks and quizzes for "Comic Book Music Videos with AI".
// Pages read ?d=<deck> (flip.html) or ?q=<quiz> (quiz.html).

window.DECKS = {
  welcome: {
    title: "How this course works",
    cards: [
      ["What will you make in this course?", "A music video for any song that moves like a comic book: AI pictures, comic panels slamming in on the beat, lyrics, callout boxes, speech bubbles and a cinematic comic-book intro."],
      ["What are the three paths?", "Stills only (start here), Hybrid (lip-sync + a few motion clips + stills) and Full animation (every shot is a video clip)."],
      ["Do the prompts work in any tool?", "Yes. Every prompt is copy-paste and the tool lists are alternatives. Use what you already pay for; the method is the same."],
      ["Where is the whole playbook in one file?", "The PDF download on this lesson (and in the last lesson) holds every chapter, prompt and checklist."],
      ["How do you know you learned it?", "Each module ends with a short quiz, and the course ends with a final assessment and a capstone: your own 30-second comic music video."]
    ]
  },
  l01: {
    title: "Why comic book style",
    cards: [
      ["Why did comic book style start?", "As a fix. Full AI animation is hard to keep consistent: faces change, skin tones drift, hands melt. A comic book is the one look where still pictures feel intentional."],
      ["What made the stills-only version win?", "It was faster, cheaper, had zero broken frames, and looked more like a finished product."],
      ["What does 'comic motion' mean here?", "Panels sliding in on the beat, page turns, pop-outs and camera moves, all built from still images."],
      ["Name the five layers of a finished video.", "1) Comic book intro, 2) Picture, 3) Lyrics, 4) Callout boxes, 5) Speech bubbles."],
      ["Why keep the layers separate?", "When one thing is wrong you fix one layer instead of starting over: fix a typo without re-rendering video, drag a box off a face, re-render one section."]
    ]
  },
  l02: {
    title: "Pick your path",
    cards: [
      ["Stills only: what moves?", "The camera and the panels. People stay still. Fastest, cheapest, lowest risk of broken shots. Best for your first video."],
      ["Hybrid: what moves?", "Lip-sync on the singing shots, a few motion clips (walking, playing), stills everywhere else. Medium time, small extra cost, medium risk."],
      ["Full animation: the catch?", "Slowest and most expensive. Faces drift, hands melt, characters change. Only when you have budget, time and patience to check every clip."],
      ["What is the rule of thumb?", "Start with stills only. Once that cut works, add lip-sync to the 3 or 4 singing shots that matter most. Add movement only where a still feels wrong."],
      ["When should you decide your path?", "Before you make a single image. It changes how many images you need, how long it takes and what can go wrong."]
    ]
  },
  l03: {
    title: "Your toolkit",
    cards: [
      ["What must your still-image tool support?", "Reference images, so your characters stay the same from shot to shot."],
      ["Why split out a vocal stem?", "Lip-sync and word timings work far better on vocals alone. Skip it if your producer gave you stems."],
      ["What settings do you use for motion clips?", "Image-to-video, 5 seconds, audio off."],
      ["What does your editor need?", "Layers you can move: captions, callout boxes and speech bubbles as separate items."],
      ["Who letters the comic cover title?", "You do, in Photopea, Canva or Photoshop with a comic font like Bangers. Never let the AI write it."],
      ["What are the three ways to work?", "1) Let an AI agent (Claude Code or Codex) drive, 2) Hybrid: you make images, the agent does the hard parts, 3) All by hand in After Effects, CapCut or Resolve."]
    ]
  },
  l04: {
    title: "Prep the song",
    cards: [
      ["What three things do you need before any pictures?", "The lyrics, when each word is sung (word timings), and the beat."],
      ["Why not trust timings typed into a lyric document?", "They drift by seconds. Use word-level timestamps from a transcript (Whisper, faster-whisper, auto-captions)."],
      ["Why use two transcription sources?", "One may skip ad-libs (\"Listen!\", \"Let's go!\") that the other catches."],
      ["What do CAPS words in the lyric sheet do?", "They mark the words that should hit hardest. They become the big slam words on screen."],
      ["At 95 BPM, how long is one beat?", "60 / 95 = 0.63 seconds."],
      ["How do you check the beat grid?", "Play the song with a click on every beat. If the clicks drift by the last chorus, the BPM is slightly off."]
    ]
  },
  l05: {
    title: "Design your world",
    cards: [
      ["Where does consistency come from?", "Repeating the same words in every prompt: one style description and one character description, pasted word for word."],
      ["What goes in a character description?", "What a viewer recognizes: skin tone, hair, face shape, signature clothes, one prop."],
      ["What do you make before anything else?", "A character model sheet: front, three-quarter and side views on a plain background."],
      ["Why check the character sheet closely?", "Every later image copies it, mistakes included."],
      ["What is the lesson of the black arms?", "Never write a color you don't want. Decide limb color on the character sheet and say it in every prompt."],
      ["How does motion energy differ for hip-hop vs R&B?", "Hip-hop: hard slams on the 808s, fast cuts, pop-outs. R&B / lo-fi: slow camera glides, soft fades, few slams."]
    ]
  },
  l06: {
    title: "Storyboard",
    cards: [
      ["How often does the shot change?", "One shot every 2 to 4 seconds, faster in the choruses."],
      ["What is the one storyboard rule above all?", "Every picture shows what is being sung."],
      ["How many images for a five-minute song?", "About 40 to 60 unique images. Choruses can reuse band and performance shots."],
      ["Name the seven shot types.", "Sing, instrument, walk, reaction, establishing, band, and special (a literal picture of a lyric)."],
      ["What is the lyric-to-picture check?", "Read every lyric line next to its picture and ask: does this picture show what is being sung?"],
      ["When do mood shots belong?", "On lines without a strong image. When a line has a strong image in it, show that image."]
    ]
  },
  l07: {
    title: "Generate the stills",
    cards: [
      ["What is the prompt formula?", "Style description + character description + the shot (Scene, Action, Composition, Mood)."],
      ["Fix this action: \"He feels blessed.\"", "Make it something a camera can see: \"Both arms raised, face tilted up, eyes closed, sunbeams breaking through the clouds.\""],
      ["Which reference images do you attach?", "The character sheet plus 1 or 2 approved shots."],
      ["Why review on a contact sheet?", "A drifting skin tone or a different art style is obvious in a grid and invisible one image at a time."],
      ["One detail is wrong. Regenerate?", "No. Edit in place: attach the image as reference 1, the character sheet as reference 2, keep everything IDENTICAL and change ONLY the one thing."],
      ["How many images per prompt?", "One. It is easier to match each result to its shot."]
    ]
  },
  l08: {
    title: "Lip-sync and animation",
    cards: [
      ["Which shots get lip-sync?", "Faces toward the camera, mouth clearly visible, nothing in front of it. Medium close-ups work best."],
      ["How do you cut the vocal for a lip-sync shot?", "From the exact second the shot starts to the second it ends, plus about a third of a second of tail."],
      ["How do you check the mouth?", "Zoom into a few frames: it should open on the vowels and close on B, M and P."],
      ["What should a motion prompt contain?", "One clear action, a static camera, and lines that keep the exact comic style, characters and props."],
      ["A slot is longer than the clip. What now?", "Slow the clip down to fill it. A frozen last frame looks broken."],
      ["A clip repeats in a later chorus?", "Start it at a different second so it doesn't look copied."]
    ]
  },
  l09: {
    title: "Study comic motion",
    cards: [
      ["Why study motion references?", "You can't just ask for \"comic book style\" and get good motion. Borrow the motion and transitions; keep your own art."],
      ["How many times do you play a reference?", "Three: once for the feel, once watching only the transitions, once counting how long each layout stays up."],
      ["What do you note at each transition?", "What moves (slide, scale, rotate, wipe), from which side, and whether the background moves too."],
      ["What is the typical rhythm in the templates?", "A new panel lands every half second to one second; a layout holds for 2 to 4 seconds."],
      ["Your AI tool can't watch video?", "Take screenshots of the key moments and attach them instead."]
    ]
  },
  l10: {
    title: "Build the comic edit",
    cards: [
      ["What is a Card scene, and when do you use it?", "One tilted panel with a thick white border on a spinning speed-line burst. For chorus hits and one-word shouts."],
      ["What is a Pop-out scene, and when do you use it?", "The character cut out with a white sticker outline over a colored grid with lightning. For the biggest line in a section."],
      ["What is a Slam transition, and when do you use it?", "The new panel lands big and settles with a quick white flash and a small shake. 0.22 seconds. Use it on lines under a second."],
      ["What happens on each chorus beat?", "Pulse the whole frame 1.5 to 2% bigger, then let it settle."],
      ["How long is a panel entrance?", "About a third of a second, with a slight overshoot: it slams in, then settles."],
      ["Why check cut-outs over bright green?", "Cut-out tools often drop white clothing. Use only cut-outs that pass; use a card or collage for the rest."]
    ]
  },
  l11: {
    title: "Words on screen",
    cards: [
      ["What are the three word layers?", "Lyric captions, callout boxes and speech bubbles, each on its own layer."],
      ["Why is every box and bubble its own item?", "When a box lands on someone's face, you drag it away instead of re-rendering."],
      ["How long does a callout box stay up?", "3 to 4 seconds, while its one lyric line plays."],
      ["How many callout boxes in a five-minute song?", "About 8 to 14."],
      ["Whisper bubble vs shout bubble: what is the difference?", "Whisper: dark, dashed outline, soft italics, for an inner thought. Shout: white bubble, thick ink outline, tail at the speaker, for a declaration."],
      ["Call and response: where does each part go?", "The question stays in the caption bar; only the answer goes in the bubble."]
    ]
  },
  l12: {
    title: "The comic book intro",
    cards: [
      ["What happens in the intro?", "Someone opens a comic book with your song on the cover, and the camera dives into page one, straight into your first shot. 10 to 20 seconds, no talking."],
      ["What are the four parts that matter?", "A cover with your title, a moment of opening it, a dive into panel one, and a hard cut on the first beat of the song."],
      ["Why leave the top of the cover art empty?", "The top quarter is clean sky for the title you letter yourself. Image models misspell titles."],
      ["Which intro shot needs no AI video?", "The book-opening shot. It is built from flat pictures: desk, cover, inside cover and page one."],
      ["What is the four-shot rhythm of the intro?", "About 3 + 3 + 3.5 + 4.5 seconds, with the first half second fading up from black."],
      ["After adding the intro, what moves?", "Everything else (song, picture, captions, boxes, bubbles) slides later by the length of the intro."]
    ]
  },
  l13: {
    title: "Sound effects",
    cards: [
      ["Why do sounds matter so much here?", "The intro has no music and no talking, so six sounds carry it."],
      ["Why put each sound on its own track?", "So you can move or swap any of them."],
      ["Where should the whoosh peak?", "Exactly on the cut into the song."],
      ["How long does the room ambience run?", "About 1 second past the intro, so it tails under the song."],
      ["What is the final sound test?", "Watch the intro with your eyes closed. Every sound should land on something you can picture."]
    ]
  },
  l14: {
    title: "Finish and export",
    cards: [
      ["What do you do before every big change?", "Duplicate your timeline as a backup."],
      ["What are the export settings?", "1920x1080, 30 fps, H.264 MP4, audio at 256 kbps or higher."],
      ["What is the last check before posting?", "Watch it once on a phone."],
      ["Where do the captions start?", "Where the song starts, after the intro."],
      ["How do you make the next video faster?", "Save the recipe: a reusable skill (with an AI agent) or a template project with the intro, caption styles and bubble designs."]
    ]
  },
  l15: {
    title: "Mistakes to skip",
    cards: [
      ["Animating everything first", "Drifting faces and endless re-dos. Build the stills cut first; add animation only where it earns its place."],
      ["Text baked into the video", "A box covers a face and you can't move it. Every box and bubble is its own item."],
      ["Lip-sync on the full mix", "Mouths flap on drums and backing vocals. Use the vocal stem cut to the shot's exact time."],
      ["Camera reaching an empty panel", "A blank flash before each image. Land each panel just before the camera gets there."],
      ["Letting the AI write titles", "Misspelled covers. Generate art with no text and letter it yourself."],
      ["Trusting typed timestamps", "Captions land seconds early. Use word timings from a transcript."]
    ]
  }
};

window.QUIZZES = {
  m1: {
    title: "Module 1 Quiz: Start Here",
    pass: 80,
    questions: [
      { q: "Why does comic book style work so well for AI music videos?", a: ["AI tools only make comic art", "It is the one look where still pictures feel intentional, so you avoid inconsistent AI animation", "It is the only style YouTube allows", "It needs no song timing"], c: 1, why: "Full AI animation is hard to keep consistent. In a comic book, stills feel deliberate." },
      { q: "Which path should a first-time creator start with?", a: ["Full animation", "Hybrid", "Stills only", "Whichever costs the most"], c: 2, why: "Stills only is the fastest, cheapest and lowest-risk path. Add lip-sync once that cut works." },
      { q: "On the hybrid path, what moves?", a: ["Every shot is a video clip", "Only the camera", "Lip-sync on singing shots, a few motion clips, stills everywhere else", "Nothing"], c: 2, why: "Hybrid mixes lip-sync and a handful of motion clips with stills." },
      { q: "Why are lyrics, callout boxes and speech bubbles kept on separate layers?", a: ["It renders faster", "You can fix or move one thing without re-rendering everything", "Editors require it", "It makes the file smaller"], c: 1, why: "Separate layers let you fix a typo or drag a box off a face without starting over." },
      { q: "Who should letter the title on the comic cover?", a: ["The image AI, in the prompt", "You, afterwards, with a comic font", "Nobody; covers have no title", "The video AI"], c: 1, why: "Image models misspell titles. Generate clean art and add the lettering yourself." }
    ]
  },
  m2: {
    title: "Module 2 Quiz: Plan It",
    pass: 80,
    questions: [
      { q: "What three things do you need from the song before making any pictures?", a: ["Cover art, a logo and a title", "The lyrics, word timings and the beat", "A budget, a deadline and a tool", "The BPM, the key and the genre"], c: 1, why: "Everything is timed to the song: lyrics, when each word is sung, and the beat grid." },
      { q: "A song is 120 BPM. How long is one beat?", a: ["0.5 seconds", "1.2 seconds", "2 seconds", "0.12 seconds"], c: 0, why: "60 ÷ 120 = 0.5 seconds per beat." },
      { q: "How do you keep a character consistent across 50 images?", a: ["Describe them differently each time for variety", "Paste the same style and character descriptions into every prompt and attach the character sheet", "Use a different tool per scene", "Only use close-ups"], c: 1, why: "Consistency comes from repeating the same words and references in every prompt." },
      { q: "What is the one storyboard rule above all?", a: ["Use as many images as possible", "Every picture shows what is being sung", "Never repeat a shot", "Always start with a band shot"], c: 1, why: "Run the lyric-to-picture check: does this picture show what is being sung?" },
      { q: "Roughly how often should the shot change?", a: ["Every 10 to 15 seconds", "Every 2 to 4 seconds, faster in choruses", "Once per verse", "Every frame"], c: 1, why: "One shot every 2–4 seconds keeps the video moving; choruses go faster." }
    ]
  },
  m3: {
    title: "Module 3 Quiz: Make the Pictures",
    pass: 80,
    questions: [
      { q: "What is the shot prompt formula?", a: ["Style + character + the shot (scene, action, composition, mood)", "Just the lyric line", "Genre + mood", "Character name + location"], c: 0, why: "Every prompt is style description + character description + the shot." },
      { q: "Which action line will give you a usable shot?", a: ["He feels blessed", "He is happy about life", "Both arms raised, face tilted up, eyes closed, sunbeams breaking through clouds", "Show his faith"], c: 2, why: "Write actions a camera could actually see." },
      { q: "An image is perfect except the arms. What do you do?", a: ["Regenerate from scratch", "Edit in place: keep everything identical and change only the arms", "Delete the shot", "Fix it with captions"], c: 1, why: "Attach the image as reference 1 and the character sheet as reference 2, then change only the one detail." },
      { q: "For lip-sync, which audio do you feed the tool?", a: ["The full mix of the whole song", "The vocal stem cut to the shot's exact time, plus about a third of a second", "A narration", "Silence"], c: 1, why: "Music under the voice confuses the mouth, and exact cutting means no nudging later." },
      { q: "A 5-second motion clip must fill a 6-second slot. What do you do?", a: ["Freeze the last frame", "Slow the clip down to fill the slot", "Leave a black gap", "Loop it twice"], c: 1, why: "A frozen last frame looks like the video stalled." }
    ]
  },
  m4: {
    title: "Module 4 Quiz: The Comic Edit",
    pass: 80,
    questions: [
      { q: "What do you copy from motion references like the Uppbeat comic templates?", a: ["The art style", "The motion and transitions, not the art", "The music", "The logos"], c: 1, why: "Borrow how things move; keep your own art." },
      { q: "Which scene type is a cut-out character with a white sticker outline over a colored grid with lightning?", a: ["Card", "Strip", "Pop-out", "Wall"], c: 2, why: "The pop-out is for the biggest line in a section." },
      { q: "A lyric line lasts under a second. Which transition fits?", a: ["Page curl", "Fade", "Slam", "Zoom punch"], c: 2, why: "A page curl needs time to read; a slam (0.22 s) fits short lines." },
      { q: "Where should every cut and panel landing sit?", a: ["Anywhere it looks good", "On a beat", "Between beats", "Only on the downbeat of each section"], c: 1, why: "Every cut and every panel landing sits on a beat." },
      { q: "A callout box lands on a singer's face. With the layer method, what do you do?", a: ["Re-render the whole video", "Drag the box away; it is its own item", "Delete the shot", "Shrink the face"], c: 1, why: "Every box and bubble is its own item, so you move it instead of re-rendering." },
      { q: "In a call and response, where does the answer go?", a: ["In the caption bar", "In the speech bubble", "In a callout box", "Nowhere"], c: 1, why: "Keep the question in the caption bar and put only the answer in the bubble." }
    ]
  },
  m5: {
    title: "Module 5 Quiz: The Comic Book Intro",
    pass: 80,
    questions: [
      { q: "How long is the comic book intro?", a: ["2 to 5 seconds", "10 to 20 seconds", "45 to 60 seconds", "The whole first verse"], c: 1, why: "Ten to twenty seconds, no talking, only sound." },
      { q: "Why leave the top of the cover art as clean sky?", a: ["To save credits", "It is space for the title you letter yourself", "Comic covers never have titles", "So the AI can write the title"], c: 1, why: "Keep the top ~28% empty for your own lettering." },
      { q: "Which intro shot is built from flat pictures with no AI video?", a: ["The walk-in", "The chair", "The book-opening shot", "The hands"], c: 2, why: "The cover swings open on its spine over the desk and the camera dives into panel one." },
      { q: "Where should the deep whoosh peak?", a: ["At the very start", "Exactly on the cut into the song", "Under the first chorus", "When the character sits"], c: 1, why: "The whoosh carries the hard cut into the music." },
      { q: "After you add a 14-second intro, what happens to the song and captions?", a: ["Nothing", "They slide later by the length of the intro", "They are deleted", "They move earlier"], c: 1, why: "Everything else in the project slides later by the intro's length." }
    ]
  },
  m6: {
    title: "Module 6 Quiz: Finish",
    pass: 80,
    questions: [
      { q: "What is the export spec in this course?", a: ["720p, 24 fps, any format", "1920x1080, 30 fps, H.264 MP4, audio 256 kbps or higher", "4K ProRes", "1080x1920, 60 fps"], c: 1, why: "1920x1080, 30 fps, H.264 MP4, audio at 256 kbps or higher." },
      { q: "What should you do before every big change?", a: ["Export the video", "Duplicate the timeline as a backup", "Start a new project", "Clear the cache"], c: 1, why: "A backup timeline lets you always go back." },
      { q: "Which review step comes last before posting?", a: ["Watch it once on a phone", "Re-render everything", "Add more boxes", "Change the font"], c: 0, why: "Most viewers watch on a phone, so check it there." },
      { q: "Captions land seconds early. What was the likely mistake?", a: ["Wrong font", "Trusting timestamps typed into a lyric document", "Too many boxes", "Exporting at 30 fps"], c: 1, why: "Use word timings from a transcript, not typed timestamps." },
      { q: "How do you make your second video take half the time?", a: ["Skip the storyboard", "Save the recipe as a reusable skill or template project", "Use fewer images", "Skip the review"], c: 1, why: "Your second video then starts at Prep the Song with half the work done." }
    ]
  },
  final: {
    title: "Final Assessment",
    pass: 80,
    questions: [
      { q: "You have a tight deadline and a small budget. Which path?", a: ["Full animation", "Stills only", "Hybrid with lip-sync on every line", "Skip the video"], c: 1, why: "Stills only is the fastest, cheapest and lowest-risk path." },
      { q: "Your lyric sheet marks some words in CAPS. What happens to them?", a: ["They are deleted", "They become the big slam words on screen", "They become callout boxes", "They are whispered"], c: 1, why: "CAPS words slam in huge in a bold display font." },
      { q: "Most images come back with the wrong limb color. What is the likely cause?", a: ["The tool is broken", "The prompt names a color you didn't want, or the character sheet shows it", "Too many references", "Aspect ratio"], c: 1, why: "Never write a color you don't want, and decide limb color on the character sheet." },
      { q: "\"LISTEN!\" plays over a sad man lying in bed. What check catches this?", a: ["The beat grid check", "The lyric-to-picture check", "The export check", "The color check"], c: 1, why: "Every picture should show what is being sung: a hand cupped to the ear." },
      { q: "Where do you spot a drifting skin tone fastest?", a: ["One image at a time", "On a contact sheet of thumbnails", "In the final export only", "In the prompt"], c: 1, why: "Drift is obvious in a grid and invisible one image at a time." },
      { q: "Which lip-sync shot is the best candidate?", a: ["A wide crowd shot", "A medium close-up with the face toward the camera and the mouth clear", "A shot from behind", "A hand on a drum"], c: 1, why: "Faces toward the camera with the mouth clearly visible work best." },
      { q: "Where should a lip-synced mouth close?", a: ["On vowels", "On B, M and P", "Never", "On every beat"], c: 1, why: "Mouths open on vowels and close on B, M and P." },
      { q: "On choruses, how much does the frame pulse on each beat?", a: ["10–15%", "1.5–2%", "50%", "It doesn't move"], c: 1, why: "A 1.5–2% pulse adds energy without looking shaky." },
      { q: "Which scene type ends the video?", a: ["Card", "Collage", "Wall: a pull-back to a wall of every panel", "Strip"], c: 2, why: "The wall is the finale, right before the end card." },
      { q: "Why must the camera never reach an empty panel?", a: ["It costs more to render", "It flashes a blank before each image", "It breaks the export", "It mutes the audio"], c: 1, why: "Land each panel just before the camera arrives." },
      { q: "How many callout boxes fit a five-minute song?", a: ["1 to 2", "About 8 to 14", "40 to 60", "One per line"], c: 1, why: "About 8–14 boxes, each tied to one lyric line for 3–4 seconds." },
      { q: "What must every callout box avoid, at its first and last frame?", a: ["Bright colors", "Covering a face", "Being on a beat", "Being yellow"], c: 1, why: "Never cover a face; check the first and last frame." },
      { q: "In the intro, which shots get animated with image-to-video?", a: ["None", "The first three: walk, chair, hands", "Only the book opening", "All four"], c: 1, why: "The book-opening shot is built from flat pictures; the other three are 5-second clips." },
      { q: "Where do you find sound effects for the intro?", a: ["Only by recording them", "Libraries like Uppbeat, Pixabay or Freesound, or generate them (for example with ElevenLabs)", "Inside the song", "You don't need any"], c: 1, why: "Check each file's license and save favorites to reuse." },
      { q: "A motion clip drifts away from the subject near the end. What do you do?", a: ["Use the whole clip anyway", "Use only the good seconds", "Freeze the first frame", "Delete the scene"], c: 1, why: "Check 5–10 frames across the clip and use only the good seconds." }
    ]
  }
};
