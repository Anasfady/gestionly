import { Poll } from '../models/Poll.js';
import { Vote } from '../models/Vote.js';
import { aggregateResults } from '../services/voteService.js';

export const createPoll = (req, res) => {
  const poll = Poll.create(req.body);
  res.status(201).json(poll);
};

export const castVote = (req, res) => {
  const { poll_id } = req.params;
  const vote = Vote.create({ poll_id, ...req.body, user_id: req.user.id });
  res.status(201).json(vote);
};

export const getResults = (req, res) => {
  const { poll_id } = req.params;
  const results = aggregateResults(poll_id);
  res.json({ poll_id, results });
};
