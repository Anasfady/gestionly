import fs from 'fs';
import csv from 'csv-parser';
import { Unit } from '../models/Unit.js';

export const bulkImportUnits = async (filePath) => {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        results.forEach(unit => Unit.create(unit));
        resolve(results);
      })
      .on('error', reject);
  });
};
