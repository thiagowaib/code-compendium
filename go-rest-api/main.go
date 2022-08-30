// ? https://www.youtube.com/watch?v=d_L64KT3SFM

package main

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

// * Item Object (struct)
type item struct {
	ID          string `json:"id"` // -> Describes key in JSON format
	Description string `json:"description"`
	Verified    bool   `json:"verified"`
}

// * Array of Items -> Not formated to JSON
var items = []item{
	{ID: "1", Description: "Item One", Verified: true},
	{ID: "2", Description: "Item Two", Verified: true},
	{ID: "3", Description: "Item Three", Verified: false},
	{ID: "4", Description: "Item Four", Verified: false},
	{ID: "5", Description: "Item Five", Verified: true},
}

// * Function that searches for Item, returns (<item>, <error>)
func getItemById(id string) (*item, error) {
	// Loops through items array in search for the correct ID
	for x, currentItem := range items {
		if currentItem.ID == id {
			// Returns the &item[x] and nil error
			return &items[x], nil
		}
	}

	// If it isn't found, Returns nil item and error
	return nil, errors.New("item not found")
}

// * GET Method
func getItems(context *gin.Context) {
	// Formats unformated Items array to JSON format
	context.IndentedJSON(http.StatusOK, items)
}

// * FETCH Method (GET by ID)
func fetchItem(context *gin.Context) {
	id := context.Param("id")
	result, err := getItemById(id)

	// If there was an error, return it
	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Item not found"})
	}

	// Otherwise, return the intended Item as result
	context.IndentedJSON(http.StatusFound, result)
}

// * POST Method
func postItem(context *gin.Context) {
	var newItem item

	// ? if {new variable}; condition {}
	// Attemps to bind the JSON format
	// into the <item> type at "newItem"
	if err := context.BindJSON(&newItem); err != nil {
		return
	}

	result, err := getItemById(newItem.ID)
	if result != nil {
		context.IndentedJSON(http.StatusConflict, gin.H{"message": "ID already in use"})
	} else if err != nil {
		// Saves the new Item
		items = append(items, newItem)
		// Sends a JSON response with HTTP Status and Item
		context.IndentedJSON(http.StatusCreated, newItem)
	}
}

func main() {
	router := gin.Default()

	// Defines the Endpoint
	router.GET("/items", getItems)
	router.POST("/newItem", postItem)
	router.GET("/fetchItem/:id", fetchItem)

	// Starts server at defined URL
	router.Run("localhost:3030")
}
