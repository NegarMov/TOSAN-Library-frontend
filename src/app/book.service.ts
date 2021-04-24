import { Injectable } from '@angular/core';
import { Genre } from './_model/genre';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  genres: Genre[] = [
    { 
      name: "Poetry",
      serverID: "Poetry",
      explanation: "Poetry (derived from the Greek poiesis, 'making') is a form of literature that uses aesthetic and often rhythmic qualities of language —such as phonaesthetics, sound symbolism, and metre— to evoke meanings in addition to, or in place of, the prosaic ostensible meaning. Poetry has a long history – dating back to prehistoric times with hunting poetry in Africa, and to panegyric and elegiac court poetry of the empires of the Nile, Niger, and Volta River valleys.",
      books: [],
      quantity: 0,
      imageSrc: "../../assets/images/poetry.png"
    },
    {
      name: "Children", 
      serverID: "Children",
      explanation: "Children's literature or juvenile literature includes stories, books, magazines, and poems that are made for children. Modern children's literature is classified in two different ways: genre or the intended age of the reader. Children's literature can be traced to stories such as fairy tales that have only been identified as children’s literature in the eighteenth century, and songs, part of a wider oral tradition, that adults shared with children before publishing existed.",
      books: [],
      quantity: 0,
      imageSrc: "../../assets/images/children.png"
    },
    { 
      name: "Sci-Fi", 
      serverID: "Sci_Fi",
      explanation: "Science fiction (sometimes shortened to sci-fi or SF) is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the 'literature of ideas', and often explores the potential consequences of scientific, social, and technological innovations.",
      books: [],
      quantity: 0,
      imageSrc: "../../assets/images/sci-fi.png"
    },
    { 
      name: "Crime Fiction", 
      serverID: "Crime_Fiction",
      explanation: "Crime fiction, detective story, murder mystery, mystery novel, and police novel are terms used to describe narratives that centre on criminal acts and especially on the investigation, either by an amateur or a professional detective, of a serious crime, generally a murder.",
      books: [],
      quantity: 0,
      imageSrc: "../../assets/images/crime fiction.png"
    },
    { 
      name: "Fantasy", 
      serverID: "Fantasy",
      explanation: "Fantasy is a genre of speculative fiction set in a fictional universe, often inspired by real world myth and folklore. Its roots are in oral traditions, which then became fantasy literature and drama. From the twentieth century it has expanded further into various media, including film, television, graphic novels, manga, animated movies and video games.",
      books: [],
      quantity: 0,
      imageSrc: "../../assets/images/fantasy.png"
    },
    { 
      name: "Romance", 
      serverID: "Romance",
      explanation: "A romance novel or romantic novel is a type of genre fiction novel which places its primary focus on the relationship and romantic love between two people, and usually has an 'emotionally satisfying and optimistic ending.' There are many subgenres of the romance novel, including fantasy, gothic, contemporary, historical romance, paranormal fiction, and science fiction. Although women are the main readers of romance novels a growing number of men enjoy them as well.",
      books: [],
      quantity: 0,
      imageSrc: "../../assets/images/romance.png"
    }
  ];

  constructor() { }

  public getGenres() {
    return this.genres;
  }
}
