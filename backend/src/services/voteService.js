import { Vote } from '../models/Vote.js';
import { Poll } from '../models/Poll.js';
import { getDb } from '../config/database.js';

export const aggregateResults = (pollId) => {
  const votes = Vote.findByPoll(pollId);
  const poll = Poll.findById(pollId);
  
  // Need to account for delegations... for simplicity in MVP, 
  // assume votes table is populated with delegated votes.
  
  const results = {};
  let totalWeight = 0;

  votes.forEach(vote => {
    results[vote.selected_option] = (results[vote.selected_option] || 0) + vote.share_percentage;
    totalWeight += vote.share_percentage;
  });

  return poll.options.map(option => ({
    option,
    weighted_percentage: totalWeight > 0 ? ((results[option] || 0) / totalWeight) * 100 : 0
  }));
};

export const delegateVote = (pollId, delegatorId, delegateeId) => {
  const db = getDb();
  db.prepare('INSERT INTO delegations (poll_id, delegator_id, delegatee_id) VALUES (?, ?, ?)').run(pollId, delegatorId, delegateeId);
};
