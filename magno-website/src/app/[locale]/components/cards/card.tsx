import styles from './card.module.css';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

// TypeScript interfaces - en tu proyecto real ponlas en un archivo .d.ts
interface CardData {
  key: string;
  translationKey: string;
}

interface ExpandableCardsProps {
  cards: CardData[];
  translationNamespace: string;
  maxExpandedCards?: number; // 1 para solo una expandida, null para múltiples
}

const ExpandableCard = ({ cardData, translationNamespace, isExpanded, onToggle }) => {
  const t = useTranslations(translationNamespace);

  const ExpandableCard = ({ cardData, translationNamespace, isExpanded, onToggle }) => {
  
  return (
    <div className="card" onClick={onToggle}>
      <div className="cardHeader">
        <h3 className="cardTitle">
          {t(`${cardData.translationKey}.title`)}
        </h3>
        <div className={`chevron ${isExpanded ? 'chevronExpanded' : ''}`}>
          <ChevronDown />
        </div>
      </div>
      
      <div className={`cardContent ${isExpanded ? 'cardContentExpanded' : 'cardContentCollapsed'}`}>
        <p className="cardDescription">
          {t(`${cardData.translationKey}.description`)}
        </p>
      </div>
    </div>
  );
};

const ExpandableCards = ({ 
  cards, 
  translationNamespace, 
  maxExpandedCards = 1 
}) => {
  const [expandedCards, setExpandedCards] = useState(new Set());
  
  const handleCardToggle = (cardKey) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(cardKey)) {
        // Si ya está expandida, la cerramos
        newSet.delete(cardKey);
      } else {
        // Si no está expandida, la abrimos
        if (maxExpandedCards === 1) {
          // Solo una card expandida a la vez
          newSet.clear();
          newSet.add(cardKey);
        } else if (maxExpandedCards === null || newSet.size < maxExpandedCards) {
          // Múltiples cards expandidas permitidas
          newSet.add(cardKey);
        } else if (maxExpandedCards > 1) {
          // Limitamos el número de cards expandidas
          const cardsArray = Array.from(newSet);
          newSet.delete(cardsArray[0]); // Removemos la primera
          newSet.add(cardKey); // Agregamos la nueva
        }
      }
      
      return newSet;
    });
  };
  
  return (
    <>
      <style>{styles}</style>
      <div className="container">
        {cards.map((cardData) => (
          <ExpandableCard
            key={cardData.key}
            cardData={cardData}
            translationNamespace={translationNamespace}
            isExpanded={expandedCards.has(cardData.key)}
            onToggle={() => handleCardToggle(cardData.key)}
          />
        ))}
      </div>
    </>
  );
};
