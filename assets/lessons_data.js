// Chess Lessons Data - Complete curriculum from beginner to master
const LESSONS_DATA = [
  {
    id: "beginner-1",
    title: "How Pieces Move",
    category: "beginner",
    level: "Beginner",
    duration: "10 min",
    icon: "♟",
    lessons: [
      { id: "pawn", title: "The Pawn", content: "Pawns move forward one square at a time, but capture diagonally. On their first move, they can move two squares.", tip: "Always try to control the center with your pawns early in the game." },
      { id: "knight", title: "The Knight", content: "Knights move in an 'L' shape: two squares in one direction, then one square perpendicular. They can jump over other pieces.", tip: "Knights are strongest in the center of the board." },
      { id: "bishop", title: "The Bishop", content: "Bishops move diagonally any number of squares. Each player starts with two bishops - one on light squares, one on dark squares.", tip: "Bishops are most powerful in open positions with long diagonals." },
      { id: "rook", title: "The Rook", content: "Rooks move horizontally or vertically any number of squares. They are the most powerful pieces but need to be developed.", tip: "Connect your rooks by clearing the back rank." },
      { id: "queen", title: "The Queen", content: "The queen combines the powers of rook and bishop, moving any number of squares in any direction.", tip: "Don't bring your queen out too early - it can be chased by minor pieces." },
      { id: "king", title: "The King", content: "The king moves one square in any direction. Though slow, protecting your king is the ultimate goal.", tip: "Castle early to get your king to safety." }
    ]
  },
  {
    id: "beginner-2",
    title: "Special Moves",
    category: "beginner",
    level: "Beginner",
    duration: "8 min",
    icon: "♚",
    lessons: [
      { id: "castling", title: "Castling", content: "Castling is moving your king two squares toward a rook, then the rook jumps over the king. It requires: neither piece moved, no pieces between, king not in check.", tip: "Castle as soon as possible - it protects your king and activates your rook." },
      { id: "en-passant", title: "En Passant", content: "If an enemy pawn moves two squares and lands beside your pawn, you can capture it as if it moved one square.", tip: "This only works immediately after the double pawn move." },
      { id: "promotion", title: "Pawn Promotion", content: "When a pawn reaches the opposite end of the board, it can be promoted to any piece (usually a queen).", tip: "Always push your passed pawns - promotion is a major advantage." }
    ]
  },
  {
    id: "beginner-3",
    title: "Check & Checkmate",
    category: "beginner",
    level: "Beginner",
    duration: "12 min",
    icon: "⚔",
    lessons: [
      { id: "check", title: "What is Check?", content: "Your king is in check when an enemy piece can capture it. You must respond to check - you cannot ignore it.", tip: "Always look for checks when planning your moves." },
      { id: "checkmate", title: "Checkmate", content: "Checkmate occurs when your king is in check and you have no legal moves to escape. The game ends immediately.", tip: "The goal is checkmate - always aim to trap your opponent's king." },
      { id: "escape-check", title: "Escaping Check", content: "Three ways to escape check: 1) Move the king, 2) Block the check, 3) Capture the checking piece.", tip: "First determine if you can move the king, then look for other options." }
    ]
  },
  {
    id: "intermediate-1",
    title: "Opening Principles",
    category: "intermediate",
    level: "Intermediate",
    duration: "15 min",
    icon: "🏰",
    lessons: [
      { id: "control-center", title: "Control the Center", content: "The center (d4, e4, d5, e5) is the most important area. Controlling it gives your pieces maximum mobility.", tip: "Play 1.e4 or 1.d4 to immediately fight for the center." },
      { id: "develop-pieces", title: "Develop Your Pieces", content: "Bring knights and bishops out early. Each piece should be moved only once in the opening if possible.", tip: "Don't move the same piece twice in the opening unless necessary." },
      { id: "king-safety", title: "King Safety", content: "Castle early to protect your king. An exposed king is vulnerable to quick attacks.", tip: "If you can't castle, move pawns in front of your king for protection." },
      { id: "dont-hang", title: "Don't Hang Pieces", content: "Never leave a piece undefended that can be captured. Always check if your move allows the opponent to take one of your pieces.", tip: "Before moving, ask: 'Can my opponent capture anything after this move?'" }
    ]
  },
  {
    id: "intermediate-2",
    title: "Tactics Basics",
    category: "intermediate",
    level: "Intermediate",
    duration: "20 min",
    icon: "⚡",
    lessons: [
      { id: "fork", title: "The Fork", content: "A fork attacks two enemy pieces at once. Knights are excellent for forking.", tip: "Look for moves that attack multiple enemy pieces." },
      { id: "pin", title: "The Pin", content: "A pin immobilizes an enemy piece because moving it would expose a more valuable piece behind it.", tip: "Pins are powerful - a pinned piece often can't move." },
      { id: "skewer", title: "The Skewer", content: "A skewer forces a valuable piece to move, exposing a less valuable piece behind it for capture.", tip: "Attack with your most valuable piece first." },
      { id: "discovered", title: "Discovered Attack", content: "Moving one piece can reveal another piece behind it attacking an enemy piece.", tip: "Always consider what pieces are behind the one you're moving." }
    ]
  },
  {
    id: "intermediate-3",
    title: "Endgame Essentials",
    category: "intermediate",
    level: "Intermediate",
    duration: "18 min",
    icon: "👑",
    lessons: [
      { id: "king-pawn", title: "King and Pawn vs King", content: "The key is to get your pawn to the sixth rank, then bring your king in front of it to support promotion.", tip: "Always try to get your king in front of your passed pawn." },
      { id: "opposition", title: "The Opposition", content: "When kings face each other with an odd number of squares between them, the player not to move is in a favorable position.", tip: "Use opposition to push your opponent's king to the edge." },
      { id: "rook-endgame", title: "Basic Rook Endgames", content: "The defending king should stay in front of the pawn. The attacking side needs to create a 'third rank' breakthrough.", tip: "Rooks work best behind passed pawns - support from behind." }
    ]
  },
  {
    id: "advanced-1",
    title: "Positional Play",
    category: "advanced",
    level: "Advanced",
    duration: "25 min",
    icon: "🎯",
    lessons: [
      { id: "space", title: "Space Advantage", content: "Having more space restricts your opponent's pieces and limits their options. Expand your territory gradually.", tip: "Space advantage often converts to tactical opportunities." },
      { id: "weak-squares", title: "Weak Squares", content: "Squares that cannot be defended by pawns are weak. Control these outposts for long-term advantage.", tip: "Knights are best on outpost squares - weak squares they can occupy." },
      { id: "good-vs-bad", title: "Good vs Bad Bishops", content: "A bishop is 'good' if it controls many squares and 'bad' if it's blocked by its own pawns.", tip: "Keep your pawns on the same color as your bishop to avoid blocking it." },
      { id: "prophylaxis", title: "Prophylaxis", content: "Prevent your opponent's plans before executing your own. Ask: 'What does my opponent want to do?'", tip: "The best move often prevents your opponent's best move." }
    ]
  },
  {
    id: "advanced-2",
    title: "Attack Patterns",
    category: "advanced",
    level: "Advanced",
    duration: "22 min",
    icon: "⚔",
    lessons: [
      { id: "minor-piece-attack", title: "Minor Piece Attack", content: "Knights and bishops can create strong attacks on the enemy king, especially when working together.", tip: "Two minor pieces in attacking position can be as deadly as a queen." },
      { id: "pawn-storm", title: "Pawn Storm", content: "Advancing pawns toward the enemy king can create weaknesses and entry points for your pieces.", tip: "Pawn storms are most effective after castling on the same side." },
      { id: "sacrifice", title: "Positional Sacrifices", content: "Sometimes giving up material creates long-term positional advantages like open lines or king safety.", tip: "Material isn't everything - activity and king safety matter too." }
    ]
  },
  {
    id: "advanced-3",
    title: "Deep Calculation",
    category: "advanced",
    level: "Advanced",
    duration: "20 min",
    icon: "🧠",
    lessons: [
      { id: "candidates", title: "Candidate Moves", content: "When calculating, first identify all plausible moves (candidates), then analyze each one deeply.", tip: "Don't waste time on bad moves - focus on 2-3 best candidates." },
      { id: "forcing", title: "Forcing Moves", content: "Checks, captures, and threats force the opponent's response and make calculation easier.", tip: "Start your calculations with forcing moves." },
      { id: "verification", title: "Verification", content: "After finding a move, verify it's the best by checking alternatives. Did you miss something better?", tip: "Always ask: 'Is there a better move?' before committing." }
    ]
  },
  {
    id: "master-1",
    title: "Master Openings",
    category: "master",
    level: "Master",
    duration: "30 min",
    icon: "📚",
    lessons: [
      { id: "e4-openings", title: "1.e4 Openings", content: "1.e4 leads to sharp, tactical play. Main lines include the Ruy Lopez, Italian Game, Sicilian Defense, and King's Gambit.", tip: "1.e4 fights for central space and opens lines for queen and bishop." },
      { id: "d4-openings", title: "1.d4 Openings", content: "1.d4 leads to strategic play. Main lines include the Queen's Gambit, Nimzo-Indian, and King's Indian Defense.", tip: "1.d4 builds a solid pawn center and prepares piece development." },
      { id: "flank-openings", title: "Flank Openings", content: "1.c4 (English) and 1.b3 (Sicilian) are flexible alternatives that avoid main theory early.", tip: "Flank openings can transpose to main lines or lead to unique positions." }
    ]
  },
  {
    id: "master-2",
    title: "Master Endgames",
    category: "master",
    level: "Master",
    duration: "35 min",
    icon: "🏆",
    lessons: [
      { id: "rook-endgame-theory", title: "Advanced Rook Endgames", content: "Key positions include Lucena and Philidor defenses. Understanding these is essential for master-level play.", tip: "The Lucena position can be won by 'checking distance' - bridge building." },
      { id: "minor-piece", title: "Bishop vs Knight", content: "Bishops excel in open positions with long diagonals. Knights excel in blocked positions and outpost squares.", tip: "Evaluate which piece suits the position before trading." },
      { id: "queen-endgame", title: "Queen Endgames", content: "Queen vs pawn on the 7th rank requires precise technique. The defending king must stay in front.", tip: "Queen vs lone king is always winning - mate in at most 10 moves." }
    ]
  },
  {
    id: "master-3",
    title: "Psychology & Time",
    category: "master",
    level: "Master",
    duration: "25 min",
    icon: "⏱",
    lessons: [
      { id: "time-pressure", title: "Time Pressure", content: "When low on time, simplify to safer positions. Avoid complex tactics you might miscalculate.", tip: "Use increments wisely - increment at move 30 helps you reach move 40." },
      { id: "mood", title: "Emotional Control", content: "Avoid tilting after mistakes. A lost position can still be saved; a lost mindset cannot.", tip: "Take breaks between games to reset your mental state." },
      { id: "preparation", title: "Opening Preparation", content: "At master level, deep opening knowledge is essential. Prepare specific lines for expected opponents.", tip: "Know the ideas behind moves, not just the move order." }
    ]
  }
];

const LESSON_CATEGORIES = {
  beginner: { name: "Beginner", color: "green", range: "0-1000 ELO" },
  intermediate: { name: "Intermediate", color: "blue", range: "1000-1600 ELO" },
  advanced: { name: "Advanced", color: "purple", range: "1600-2000 ELO" },
  master: { name: "Master", color: "red", range: "2000+ ELO" }
};
