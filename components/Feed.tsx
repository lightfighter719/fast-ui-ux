import React from 'react';
import { Session } from '../types';

interface FeedProps {
    sessions: Session[];
    onSelectSession: (index: number) => void;
}

const Feed: React.FC<FeedProps> = ({ sessions, onSelectSession }) => {
    if (sessions.length === 0) return null;

    // Show last 5 sessions, reversed (newest first)
    const recentSessions = [...sessions].reverse().slice(0, 5);

    return (
        <div className="rss-feed">
            <div className="feed-header">RECENT ACTIVITY</div>
            <div className="feed-list">
                {recentSessions.map((session) => (
                    <div 
                        key={session.id} 
                        className="feed-item" 
                        onClick={() => onSelectSession(sessions.indexOf(session))}
                    >
                        <div className="feed-timestamp">
                            {new Date(session.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div className="feed-prompt">
                            {session.prompt}
                        </div>
                        <div className="feed-type">UI</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
