"use client";
import { useState, useEffect } from "react";
import styles from "@/app/ui/buttons.module.css";

interface InsuranceTerms {
  term: string;
  def: string;
}

interface Roles {
  role: string;
  responsibility: string | string[];
}

type FlashcardData = InsuranceTerms | Roles;

interface DatasheetResponse {
  datasheet: FlashcardData[];
}

const availableDecks = [
  { name: "BasicDefinitions" },
  { name: "Roles" },
  { name: "ContractLaw" },
];

const FlashCard = () => {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedDeck) return;

    const fetchFlashcards = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `/api/notes?name=${encodeURIComponent(selectedDeck)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: DatasheetResponse = await response.json();

        console.log(data);

        if (!data.datasheet || !Array.isArray(data.datasheet)) {
          throw new Error("Invalid data format received from API");
        }

        setFlashcards(data.datasheet);
        setCurrentIndex(0);
        setIsFlipped(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch flashcards"
        );
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlashcards();
  }, [selectedDeck]);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(
      (prev) => (prev - 1 + flashcards.length) % flashcards.length
    );
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setFlashcards((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  const getCardContent = (card: FlashcardData) => {
    if ("term" in card) {
      return {
        front: card.term,
        back: card.def,
      };
    } else {
      return {
        front: card.role,
        back: card.responsibility,
      };
    }
  };

  if (!selectedDeck) {
    return (
      <div className={"page-wrap" + " " + styles.heavenly}>
        <h1 className={"blog-title"}>Select a Deck</h1>
        <div>
          {availableDecks.map((deck) => (
            <button
              key={deck.name}
              onClick={() => setSelectedDeck(deck.name)}
              className={styles.avantGarde}
            >
              {deck.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={"page-wrap" + " " + styles.heavenly}>
        <button
          onClick={() => setSelectedDeck(null)}
          className={styles.avantGarde}
        >
          Back to Deck Selection
        </button>
        <p>Loading flashcards...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={"page-wrap" + " " + styles.heavenly}>
        <button
          onClick={() => setSelectedDeck(null)}
          className={styles.avantGarde}
        >
          Back to Deck Selection
        </button>
        <p style={{ color: "red" }}>Error: {error}</p>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <div className={"page-wrap" + " " + styles.heavenly}>
        <button
          onClick={() => setSelectedDeck(null)}
          className={styles.avantGarde}
        >
          Back to Deck Selection
        </button>
        <p>No flashcards available in this deck.</p>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];
  const { front, back } = getCardContent(currentCard);

  return (
    <div className={"page-wrap" + " " + styles.heavenly}>
      <button
        onClick={() => setSelectedDeck(null)}
        className={styles.avantGarde}
      >
        Back to Deck Selection
      </button>

      <div>
        Card{" "}
        <span
          className={styles.info}
          style={{ padding: "4px", borderRadius: "4px" }}
        >
          {currentIndex + 1}
        </span>{" "}
        of {flashcards.length}
      </div>

      <div
        className={isFlipped ? styles.flashCardBack : styles.flashCardFront}
        onClick={handleFlip}
      >
        {isFlipped ? (
          Array.isArray(back) ? (
            <ul>
              {back.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          ) : (
            back
          )
        ) : (
          front
        )}
      </div>

      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            className={styles.avantGarde}
            onClick={handlePrev}
            disabled={flashcards.length <= 1}
          >
            Previous
          </button>
          <button
            className={styles.avantGarde}
            onClick={handleNext}
            disabled={flashcards.length <= 1}
          >
            Next
          </button>
        </div>
        <button
          className={styles.avantGarde}
          onClick={handleShuffle}
          disabled={flashcards.length <= 1}
        >
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default FlashCard;
