"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//represents a chess game
var Game = /** @class */ (function () {
    function Game() {
        this.pieces = Game.makePieces();
    }
    Game.makePieces = function () {
        return [
            //Kinkgs
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            // Queens
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),
            // Bishops
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),
        ];
    };
    return Game;
}());
// A chess piece
var Piece = /** @class */ (function () {
    function Piece(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    Piece.prototype.moveTo = function (position) {
        this.position = position;
    };
    return Piece;
}());
// A set of coordinates for a piece
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return King;
}(Piece));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Queen.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return Queen;
}(Piece));
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bishop.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return Bishop;
}(Piece));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return Knight;
}(Piece));
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rook.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return Rook;
}(Piece));
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pawn.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return Pawn;
}(Piece));
var Position = /** @class */ (function () {
    function Position(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    Position.prototype.distanceFrom = function (position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0)) - this.file.charCodeAt(0)
        };
    };
    return Position;
}());
