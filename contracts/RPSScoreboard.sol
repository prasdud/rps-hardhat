// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RPSScoreboard {
    struct Score {
        uint wins;
        uint losses;
        uint ties;
    }

    mapping(address => Score) public scores;

    function recordGame(address player, uint8 result) public {
        require(result <= 2, "Invalid result");
        if (result == 0) scores[player].ties += 1;
        else if (result == 1) scores[player].wins += 1;
        else if (result == 2) scores[player].losses += 1;
    }

    function getScore(address player) public view returns (uint, uint, uint) {
        Score memory s = scores[player];
        return (s.wins, s.losses, s.ties);
    }
}
