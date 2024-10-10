import { type CharacterListResponseInfo } from '../../lib/rick-and-morty-api-client';
import { pageResolver } from '../utils/pageResolver';

const CharactersPagination = (paginationInfo: CharacterListResponseInfo) => {
  const { prev, next } = paginationInfo;

  const prevPage = prev ? new URL(prev).searchParams.get('page') : 1;
  const nextPage = next ? new URL(next).searchParams.get('page') : null;
  return (
    <div className="flex flex-row justify-between">
      <div>
        {prevPage && (
          <a href="/#" className="bg-blue-400 text-white rounded-md px-4 py-2 hover:bg-blue-600">
            Previous
          </a>
        )}
      </div>
      <div>
        {nextPage && (
          <a href="/#" className="bg-blue-400 text-white rounded-md px-4 py-2 hover:bg-blue-600">
            Next
          </a>
        )}
      </div>
    </div>
  );
};

export default CharactersPagination;
